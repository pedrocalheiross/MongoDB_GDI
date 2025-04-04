/*O banco de dados é sobre "Gerenciamento de Times Esportivos: Atletas, Técnicos, Jogos, Estatísticas". Faremos algo simples, sem precisar de um minimundo elaborado.
Segue descrição do projeto: Simularemos um cenário de futebol. Atletas particiapam de vários jogos, os quais participam vários jogadores. Atletas possuem muitos técnicos, os quais possuem muitos atletas.
um jogo possui uma estatística e uma estatística pode pertencer a vários jogos.

Criaremos, claro, uma coleção para cada entidade, ou seja, Atleta, Jogo, Técnico e Estatística e uma para cada relacionamento N:N.

Uma instância de Atleta possui CPF (que em um modleo relacional seria a chave primária), nome, telefone,
altura, salario e data de nascimento.

Uma instância de Técnico, semelhante à Atleta, possui CPF (que em um modleo relacional seria a chave primária), nome, telefone, altura, salario e data de nascimento.

Uma instância de Estatística, possui cod (que em um modleo relacional seria a chave primária), quantidade de chutes ao gol, quantidade de gols, quantidade de passes,
quantidade de cartões amarelos, quantidade de cartões vermelhos.

Uma instância de Jogo, possui cod (que em um modleo relacional seria a chave primária), tempo de duração, Placar, data e estatísticas do jogo.

Uma instância de Atleta_Técnico possui CPF de Atleta e CPF do Técnico desse atleta (que em um modleo relacional seria uma chave primária composta)

Uma instância de Atleta_Jogo possui CPF de Atleta e cod do Jogo que esse atleta jogou (que em um modleo relacional seria uma chave primária composta).
*/


/* Vou criar uma "pasta" que conterá as entidades e relacionamentos do minimundo */
use("Times_Gerenciamento");

/* Criando a coleção de Atletas */

db.createCollection("Atletas");

/* inserindo um atleta */

db.Atletas.insertOne({CPF: "455.777.999-10", nome: "Pedro Almeida", telefone: "(81) 93382-6221", altura: 1.72, salario: Decimal128("10.100"), data_nasc: new ISODate("2003-01-24")});

/* Para checar se foi adicionado corretamente */

db.Atletas.find()

/* Como deu certo, vou inserir mais atletas */

db.Atletas.insertMany([
    {
        CPF: "455.777.999-10",
        nome: "Pedro Almeida",
        telefone: "(81) 93382-6221",
        altura: 1.72,
        salario: Decimal128("10.100"),
        data_nasc: new ISODate("2003-01-24")
    },
    {
        CPF: "123.456.999-01",
        nome: "Carlos Silva",
        telefone: "(11) 98765-4321",
        altura: 1.80,
        salario: Decimal128("12.500"),
        data_nasc: new ISODate("1998-05-12")
    },
    {
        CPF: "234.527.812-12",
        nome: "Mariana Costa",
        telefone: "(21) 99876-5432",
        altura: 1.65,
        salario: Decimal128("9.800"),
        data_nasc: new ISODate("2000-08-25")
    },
    {
        CPF: "455.632.901-23",
        nome: "Ricardo Lima",
        telefone: "(31) 91234-5678",
        altura: 1.75,
        salario: Decimal128("11.200"),
        data_nasc: new ISODate("1995-03-30")
    },
    {
        CPF: "466.545.012-34",
        nome: "Fernanda Rocha",
        telefone: "(41) 93456-7890",
        altura: 1.70,
        salario: Decimal128("10.500"),
        data_nasc: new ISODate("1999-07-18")
    },
    {
        CPF: "117.830.123-45",
        nome: "Thiago Mendes",
        telefone: "(51) 94567-8901",
        altura: 1.82,
        salario: Decimal128("14.300"),
        data_nasc: new ISODate("1997-12-05")
    },
    {
        CPF: "448.916.234-56",
        nome: "Aline Souza",
        telefone: "(61) 95678-9012",
        altura: 1.68,
        salario: Decimal128("9.600"),
        data_nasc: new ISODate("2001-02-22")
    },
    {
        CPF: "759.045.345-67",
        nome: "Bruno Oliveira",
        telefone: "(71) 96789-0123",
        altura: 1.77,
        salario: Decimal128("13.200"),
        data_nasc: new ISODate("1996-09-14")
    },
    {
        CPF: "856.111.456-74",
        nome: "Juliana Ribeiro",
        telefone: "(81) 97890-1234",
        altura: 1.73,
        salario: Decimal128("11.700"),
        data_nasc: new ISODate("1998-11-27")
    },
    {
        CPF: "901.244.565-89",
        nome: "Felipe Cardoso",
        telefone: "(91) 98901-2345",
        altura: 1.79,
        salario: Decimal128("12.800"),
        data_nasc: new ISODate("1995-06-10")
    },
    {
        CPF: "012.341.672-94",
        nome: "Larissa Martins",
        telefone: "(31) 99012-3456",
        altura: 1.66,
        salario: Decimal128("10.900"),
        data_nasc: new ISODate("2002-04-09")
    },
    {
        CPF: "122.232.313-14",
        nome: "Gustavo Ferreira",
        telefone: "(41) 90123-4567",
        altura: 1.85,
        salario: Decimal128("15.400"),
        data_nasc: new ISODate("1993-10-31")
    },
    {
        CPF: "222.333.444-55",
        nome: "Camila Duarte",
        telefone: "(51) 91234-5678",
        altura: 1.72,
        salario: Decimal128("11.300"),
        data_nasc: new ISODate("2001-07-07")
    },
    {
        CPF: "333.444.555-66",
        nome: "Eduardo Nunes",
        telefone: "(61) 92345-6789",
        altura: 1.78,
        salario: Decimal128("12.100"),
        data_nasc: new ISODate("1999-05-21")
    },
    {
        CPF: "444.555.666-77",
        nome: "Tatiane Barros",
        telefone: "(71) 93456-7890",
        altura: 1.67,
        salario: Decimal128("9.900"),
        data_nasc: new ISODate("2000-12-15")
    }
])

/* Criando a coleção de Técnicos */

db.createCollection("Tecnicos");

/* inserindo um técnico */

db.Tecnicos.insertOne({CPF: "555.666.777-88",
        nome: "Roberto Fonseca",
        telefone: "(81) 94567-8901",
        altura: 1.78,
        salario: Decimal128("18.500"),
        data_nasc: new ISODate("1980-02-14")});

/* Para checar se foi adicionado corretamente */

db.Tecnicos.find()

/* Como deu certo, vou inserir mais tecnicos */

db.Tecnicos.insertMany([
    {
        CPF: "666.777.888-99",
        nome: "Sandra Lopes",
        telefone: "(11) 95678-9012",
        altura: 1.65,
        salario: Decimal128("17.200"),
        data_nasc: new ISODate("1975-06-22")
    },
    {
        CPF: "777.888.999-00",
        nome: "Marcelo Vieira",
        telefone: "(21) 96789-0123",
        altura: 1.82,
        salario: Decimal128("19.300"),
        data_nasc: new ISODate("1983-11-10")
    },
    {
        CPF: "888.999.000-11",
        nome: "Patrícia Almeida",
        telefone: "(31) 97890-1234",
        altura: 1.70,
        salario: Decimal128("16.800"),
        data_nasc: new ISODate("1978-09-05")
    },
    {
        CPF: "999.000.111-22",
        nome: "Fernando Santos",
        telefone: "(41) 98901-2345",
        altura: 1.75,
        salario: Decimal128("20.100"),
        data_nasc: new ISODate("1981-04-18")
    },
    {
        CPF: "111.222.333-44",
        nome: "Mônica Ribeiro",
        telefone: "(51) 99012-3456",
        altura: 1.68,
        salario: Decimal128("18.000"),
        data_nasc: new ISODate("1979-12-30")
    },
    {
        CPF: "222.333.444-99",
        nome: "Jorge Matos",
        telefone: "(61) 90123-4567",
        altura: 1.80,
        salario: Decimal128("21.500"),
        data_nasc: new ISODate("1976-07-25")
    },
    {
        CPF: "333.222.111-88",
        nome: "Renata Farias",
        telefone: "(71) 91234-5678",
        altura: 1.67,
        salario: Decimal128("17.600"),
        data_nasc: new ISODate("1982-03-12")
    },
    {
        CPF: "444.111.222-77",
        nome: "Carlos Moreira",
        telefone: "(81) 92345-6789",
        altura: 1.78,
        salario: Decimal128("19.700"),
        data_nasc: new ISODate("1984-05-27")
    },
    {
        CPF: "555.444.333-66",
        nome: "Luciana Peixoto",
        telefone: "(91) 93456-7890",
        altura: 1.66,
        salario: Decimal128("16.900"),
        data_nasc: new ISODate("1985-10-08")
    }
])

/* Para representar a relação N:N de atletas com tecnicos, vou criar uma outra coleção
Atleta_Tecnico, contendo o cpf do aluno e o cpf do tecnico */

const atleta_tecnico = [];

const atletas_cpfs = [
    "455.777.999-10",
    "123.456.999-01",
    "234.527.812-12",
    "455.632.901-23",
    "466.545.012-34"
];

const tecnicos_cpfs = [
    "555.666.777-88",
    "666.777.888-99",
    "777.888.999-00",
    "888.999.000-11",
    "999.000.111-22"
];

// Garanto que os CPFs existem nas coleções aluno e tecnico antes de inserir
for (let i = 0; i < atletas_cpfs.length; i++) {
    let atleta = db.Atletas.findOne({ CPF: atletas_cpfs[i] });
    let tecnico = db.Tecnicos.findOne({ CPF: tecnicos_cpfs[i] });

    if (atleta && tecnico) {
        atleta_tecnico.push({
            atleta_cpf: atleta.CPF,
            tecnico_cpf: tecnico.CPF
        });
    }
}

// Insere os pares validados na coleção Atleta_Tecnico
if (atleta_tecnico.length > 0) {
    db.Atleta_Tecnico.insertMany(atleta_tecnico);
} else {
    print("Nenhum dado válido para inserir.");
}

/* Criando a coleção de Estatisticas */

db.createCollection("Estatistica");

/* inserindo estatisticas */

db.Estatistica.insertMany([
    {
        cod: 1,
        qtde_chute_gol: 31,
        qtde_gols: 5,
        qtde_passes: 120,
        qtde_cartao_amarelo: 4,
        qtde_cartao_vermelho: 1
    },
    {
        cod: 2,
        qtde_chute_gol: 22,
        qtde_gols: 1,
        qtde_passes: 102,
        qtde_cartao_amarelo: 2,
        qtde_cartao_vermelho: 0
    },
    {
        cod: 3,
        qtde_chute_gol: 25,
        qtde_gols: 2,
        qtde_passes: 124,
        qtde_cartao_amarelo: 3,
        qtde_cartao_vermelho: 2
    },
    {
        cod: 4,
        qtde_chute_gol: 36,
        qtde_gols: 7,
        qtde_passes: 190,
        qtde_cartao_amarelo: 5,
        qtde_cartao_vermelho: 2
    },
    {
        cod: 5,
        qtde_chute_gol: 32,
        qtde_gols: 1,
        qtde_passes: 140,
        qtde_cartao_amarelo: 3,
        qtde_cartao_vermelho: 1
    },
    {
        cod: 6,
        qtde_chute_gol: 35,
        qtde_gols: 2,
        qtde_passes: 124,
        qtde_cartao_amarelo: 5,
        qtde_cartao_vermelho: 3
    },
    {
        cod: 7,
        qtde_chute_gol: 30,
        qtde_gols: 6,
        qtde_passes: 98,
        qtde_cartao_amarelo: 4,
        qtde_cartao_vermelho: 1
    },
    {
        cod: 8,
        qtde_chute_gol: 33,
        qtde_gols: 4,
        qtde_passes: 91,
        qtde_cartao_amarelo: 3,
        qtde_cartao_vermelho: 1
    },
    {
        cod: 9,
        qtde_chute_gol: 40,
        qtde_gols: 10,
        qtde_passes: 160,
        qtde_cartao_amarelo: 0,
        qtde_cartao_vermelho: 0
    },
    {
        cod: 10,
        qtde_chute_gol: 32,
        qtde_gols: 5,
        qtde_passes: 122,
        qtde_cartao_amarelo: 3,
        qtde_cartao_vermelho: 1
    }
]);


/* Criando a coleção de Jogo */

db.createCollection("Jogo");

/* inserindo jogos */

db.Jogo.insertMany([
    {
        cod: 1,
        tempo_duracao: "95 minutos",
        placar: "2-1",
        data: ISODate("2025-03-10T19:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 1 })._id
    },
    {
        cod: 2,
        tempo_duracao: "100 minutos",
        placar: "1-1 (3-2 nos pênaltis)",
        data: ISODate("2025-03-12T20:30:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 2 })._id
    },
    {
        cod: 3,
        tempo_duracao: "90 minutos",
        placar: "3-0",
        data: ISODate("2025-03-15T18:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 3 })._id
    },
    {
        cod: 4,
        tempo_duracao: "93 minutos",
        placar: "3-3",
        data: ISODate("2025-03-15T18:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 1 })._id
    },
    {
        cod: 5,
        tempo_duracao: "91 minutos",
        placar: "3-2",
        data: ISODate("2025-03-11T19:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 6 })._id
    },
    {
        cod: 3,
        tempo_duracao: "90 minutos",
        placar: "4-0",
        data: ISODate("2025-02-15T18:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 3 })._id
    },
    {
        cod: 3,
        tempo_duracao: "90 minutos",
        placar: "5-0",
        data: ISODate("2025-01-15T18:00:00Z"),
        estatistica: db.Estatistica.findOne({ cod: 5 })._id
    }
]);

/* Agora só falta realizar o relacionamento N:N entre atleta e jogo
Para isos, vou criar uma coleção intermediária e vou aproveitar para adicionar
o tempo jogado pelo atleta naquele jogo e quantos gols ele marcou*/

const atleta_jogo = [];

const cpfs_atletas = [
    "455.777.999-10",
    "123.456.999-01",
    "234.527.812-12",
    "455.632.901-23",
    "466.545.012-34"
];

const cod_jogos = [
    1,
    1,
    2,
    1,
    4
];

const tempos_jogados = [
    90,
    75,
    85,
    60,
    45
];

const gols_marcados = [
    2,
    1,
    0,
    1,
    3
];

// Garanto que os CPFs existem nas coleções aluno e tecnico antes de inserir
for (let i = 0; i < cpfs_atletas.length; i++) {
    let atleta = db.Atletas.findOne({ CPF: cpfs_atletas[i] });
    let jogo = db.Jogo.findOne({ cod: cod_jogos[i] });

    if (atleta && jogo) {
        atleta_jogo.push({
            atleta_cpf: atleta.CPF,
            jogo_cod: jogo.cod,
            tempo_jogado: tempos_jogados[i],
            gols_marcados: gols_marcados[i]
        });
    }
}

// Insere os pares validados na coleção Atleta_Jogo
if (atleta_jogo.length > 0) {
    db.Atleta_Jogo.insertMany(atleta_jogo);
} else {
    print("Nenhum dado válido para inserir.");
}
