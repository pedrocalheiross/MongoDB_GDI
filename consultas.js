// 1. USE

use("Times_Gerenciamento");
print("1. USE: Foi utilizado na criação da tabela \n")

// 2. FIND

print("---------------------")
print("2. FIND")

print(db.Atletas.find({}))

// 3. SIZE + 15. LIMIT

print("---------------------")
print("3. SIZE + 15. LIMIT : Retorna os três primeiros técnicos com oito jogadores sob sua supervisão")

print(db.Tecnicos.find({ atletas: { $size: 8 } }).limit(3));

// 4. AGGREGATE + 12. AVG

print("---------------------")
print("4. SIZE + 12. AVG: Retorna a média ($AVG) de todos os atletas. Aggregate permite que nós utilizemos o $AVG")

print(db.Atletas.aggregate([
    { $group: { _id: null, mediaSalario: { $avg: "$salario" } } }
]));


// 5. MATCH + 7. AVG

print("---------------------")
print("5. SIZE + 7. GTE: Lista todos os atletas com salário maior que 10.000")

print(db.Atletas.aggregate([
    { $match: { salario: { $gte: 10000 } } }
]));


// 6. PROJECT + 8. GROUP + 9. SUM + 14. SORT

print("---------------------")
print("6. PROJECT + 8. GROUP + 9.SUM + 14. SORT: Encontra quantos (soma do número de) atletas tem a mesma altura, agrupando por altura, e usa Project para exibir as alturas com o nome correto, e Sort para ordenar")

print(db.Atletas.aggregate([
    { $group: { _id: "$altura", total: { $sum: 1 } } },
    { $project: { _id: 0, altura: "$_id", total: 1 } },
    { $sort: { altura: 1 } }
]));

// 10. COUNTDOCUMENTS

print("---------------------")
print("10. COUNTDOCUMENTS: Conta quantos Jogos estão no banco de dados")

print(db.Jogos.countDocuments());

// 11. MAX

print("---------------------")
print("11. MAX: Maior salário dos atletas")

print(db.Atletas.aggregate([
    { $group: { _id: null, maiorSalario: { $max: "$salario" } } },
    { $project: { _id: 0, maiorSalario: 1 }}
]));

// 13. EXISTS

print("---------------------")
print("13. EXISTS: Primeiro procura pelos cinco primeiros técnicos que possuem telefone, e depois pelos que não (nenhum)")

print(db.Tecnicos.find({ telefone: { $exists: true } }).limit(5));
print("---------------------")
print(db.Tecnicos.find({ telefone: { $exists: false } }));

// 16. WHERE

print("---------------------")
print("13. EXISTS: Primeiro procura pelos cinco primeiros técnicos que possuem telefone, e depois pelos que não (nenhum)")

db.Atletas.find({ $where: "this.nome.startsWith('A')" });

// 16. $WHERE + 18. FUNCTION

print("---------------------");
print("16. $WHERE: Retorna atletas com salário menor que 8000 por meio de FUNCTION");

print(db.Atletas.find({ $where: function() { return this.salario < 80000; }}));

// 17. MAPREDUCE

print("---------------------");
print("17. MAPREDUCE: Dispõe a soma de salários e o salário médio dos atletas por técnico");

print(db.Atletas.mapReduce(
    function() { emit(this.tecnico, this.salario); },
    function(key, values) { return { totalSalario: Array.sum(values), mediaSalarial: Array.sum(values) / values.length }; },
    { out: { inline: 1 } }
));

// 19. PRETTY
print("---------------------");
print("19. PRETTY: Exibe um jogo formatado com pretty()");

print(db.Jogos.find().limit(1).pretty());

// 20. ALL
print("---------------------");
print("20. ALL: Encontra jogos que tiveram dois jogadores específicos");

print(db.Tecnicos.find({
    atletas: { $all: ["154.029.678-49", "158.024.936-15"] }
}));

// 21. SET
print("---------------------");
print("21. SET: Atualiza o salário de um atleta específico");

db.Atletas.updateOne(
    { CPF: "154.029.678-49" },
    { $set: { salario: 15000 } }
);

print(db.Atletas.findOne({ CPF: "154.029.678-49" }));

// 22. TEXT + 23. SEARCH
print("---------------------");
print("22. TEXT + 23. SEARCH: Busca jogadores com o nome Andrade");

db.Atletas.createIndex({ nome: "text" });
print(db.Atletas.find({ $text: { $search: "Andrade" } }));

// 24. FILTER
print("---------------------");
print("24. FILTER: Filtra atletas com peso acima de 115 kg");

print(db.Atletas.find({ peso: { $gte: 115 } }));

// 25. UPDATE + 26. SAVE (UPDATEONE/UPDATEMANY)
print("---------------------");
print("25. UPDATEONE: Atualiza a altura de um atleta");

db.Atletas.updateOne(
    { CPF: "241.809.375-14" },
    { $set: { altura: 1.90 } }
);
print(db.Atletas.findOne({ CPF: "241.809.375-14" }));

print("---------------------");
print("25. UPDATEMANY: Aumenta 5% no salário de todos os técnicos");

db.Tecnicos.updateMany(
    {},
    { $mul: { salario: 1.05 } }
);
print(db.Tecnicos.find().limit(5));

print(db.Jogos.findOne({ codigo: "J123" }));

// 27. RENAMECOLLECTION
print("---------------------");
print("27. RENAMECOLLECTION: Renomeia a coleção de Estatisticas para Estatistica");

db.Estatisticas.renameCollection("Estatistica");
print(db.getCollectionNames());

// 28. COND
print("---------------------");
print("28. COND: Cria um campo 'alto' para indicar se o atleta tem mais de 1.80m");

print(db.Atletas.aggregate([
    { $project: { _id: 0, nome: 1, altura: 1, alto: { $cond: { if: { $gte: ["$altura", 1.80] }, then: "Sim", else: "Não" } } } }
]));

// 29. LOOKUP
print("---------------------");
print("29. LOOKUP: Relaciona atletas com seus respectivos técnicos");

print(db.Atletas.aggregate([{$lookup: { from: "Tecnicos", localField: "tecnico", foreignField: "CPF", as: "tecnico_info"}}]));

print(resultado);

// 30. FINDONE
print("---------------------");
print("30. FINDONE: Busca um jogo específico");

print(db.Jogos.findOne({ codigo_jogo: "61b826b1-bdea-417c-8210-4dcfa74e0a2a" }));

// 31. ADDTOSET
print("---------------------");
print("31. ADDTOSET: Adiciona um novo atleta a um técnico");

db.Atletas.insertOne({
    CPF: "241.809.375-14",
    nome: "Bruna Vasconcelos",
    telefone: "+55 11 9314 9190",
    altura: 1.92,
    peso: 101,
    salario: 13180,
    data_nasc: "1996-01-25",
    tecnico: "438.150.926-98"
});

db.Tecnicos.updateOne(
    { CPF: "438.150.926-98" },
    { $addToSet: { atletas: "241.809.375-14" } }
);

// Verificando a atualização do técnico
print(db.Tecnicos.findOne({ CPF: "438.150.926-98" }));
