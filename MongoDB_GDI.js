/*O banco de dados é sobre "Gerenciamento de Times Esportivos: Atletas, Técnicos, Jogos, Estatísticas". Faremos algo simples, sem precisar de um minimundo elaborado.
Segue descrição do projeto: Simularemos um cenário de futebol.

Atletas particiapam de vários jogos, os quais participam vários jogadores.
Atletas possuem um técnico, os quais possuem muitos atletas.
Um jogo possui uma estatística e uma estatística pode pertencer a vários jogos.

Criaremos, claro, uma coleção para cada entidade, ou seja, Atleta, Jogo, Técnico e Estatística e uma para cada relacionamento N:N.

Uma instância de Atleta possui CPF (que em um modelo relacional seria a chave primária), nome, telefone,
altura, peso, salario e data de nascimento.

Uma instância de Técnico, semelhante à Atleta, possui CPF (que em um modelo relacional seria a chave primária), nome, telefone, salario, data de nascimento e atletas sob sua supervisão.
 
Uma instância de Estatística, possui codigo (que em um modelo relacional seria a chave primária), quantidade de chutes ao gol, quantidade de gols, quantidade de passes,
quantidade de cartões amarelos, quantidade de cartões vermelhos.

Uma instância de Jogo, possui codigo (que em um modelo relacional seria a chave primária), jogadores que nele jogaram, tempo de duração e data.

Um script de Python foi utilizado para o povoamento
*/


/* Vou criar uma "pasta" que conterá as entidades e relacionamentos do minimundo */
use("Times_Gerenciamento");

/* Criando as coleções */
db.createCollection("Atletas");
db.createCollection("Tecnicos");
db.createCollection("Jogos");
db.createCollection("Estatisticas");

/* Inserindo múltiplos Atletas */
let atletas = [
    {
        "CPF": "241.809.375-14",
        "nome": "Bruna Vasconcelos",
        "telefone": "+55 11 9314 9190",
        "altura": 1.92,
        "peso": 101,
        "salario": 13180,
        "data_nasc": "1996-01-25",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "519.037.682-68",
        "nome": "Mariane Ribeiro",
        "telefone": "(051) 2628-4987",
        "altura": 1.99,
        "peso": 94,
        "salario": 24213,
        "data_nasc": "2000-01-27",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "314.986.750-93",
        "nome": "Juliana Duarte",
        "telefone": "11 5273-5454",
        "altura": 1.93,
        "peso": 98,
        "salario": 28700,
        "data_nasc": "2004-07-15",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "319.576.824-00",
        "nome": "Sra. Alexia Moreira",
        "telefone": "(084) 7014-3634",
        "altura": 1.83,
        "peso": 91,
        "salario": 48336,
        "data_nasc": "2006-11-05",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "895.374.216-19",
        "nome": "Maria Eduarda Melo",
        "telefone": "+55 81 4431-3518",
        "altura": 1.69,
        "peso": 65,
        "salario": 20256,
        "data_nasc": "1990-07-21",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "748.012.536-44",
        "nome": "Henrique Sousa",
        "telefone": "(031) 0824 0084",
        "altura": 1.95,
        "peso": 91,
        "salario": 46660,
        "data_nasc": "1988-07-20",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "047.362.195-99",
        "nome": "Rebeca Caldeira",
        "telefone": "(081) 1167-1902",
        "altura": 1.93,
        "peso": 81,
        "salario": 18730,
        "data_nasc": "1989-05-01",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "316.475.829-46",
        "nome": "Liz Barros",
        "telefone": "(041) 7496-4990",
        "altura": 1.87,
        "peso": 94,
        "salario": 47469,
        "data_nasc": "2004-12-30",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "341.765.092-52",
        "nome": "Srta. Giovanna Pires",
        "telefone": "81 7974 0344",
        "altura": 1.63,
        "peso": 70,
        "salario": 52784,
        "data_nasc": "1999-09-14",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "936.041.587-10",
        "nome": "Igor da Luz",
        "telefone": "+55 11 0249 9471",
        "altura": 1.7,
        "peso": 71,
        "salario": 46943,
        "data_nasc": "2000-03-14",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "897.304.512-14",
        "nome": "Sra. Maria Luiza da Mata",
        "telefone": "0500-401-3990",
        "altura": 1.88,
        "peso": 78,
        "salario": 55352,
        "data_nasc": "2007-02-16",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "278.914.365-09",
        "nome": "Asafe Teixeira",
        "telefone": "+55 31 7565 5125",
        "altura": 1.91,
        "peso": 81,
        "salario": 57759,
        "data_nasc": "1998-04-05",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "680.372.415-80",
        "nome": "Sra. Laura Ribeiro",
        "telefone": "71 8087 6038",
        "altura": 1.73,
        "peso": 68,
        "salario": 42170,
        "data_nasc": "1996-07-25",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "703.241.659-43",
        "nome": "Sara Pires",
        "telefone": "+55 71 0932 4808",
        "altura": 1.95,
        "peso": 88,
        "salario": 37717,
        "data_nasc": "1998-02-19",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "712.359.486-09",
        "nome": "Henry Gabriel Camargo",
        "telefone": "(071) 3782-6398",
        "altura": 1.76,
        "peso": 90,
        "salario": 14363,
        "data_nasc": "1988-11-24",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "654.902.731-43",
        "nome": "João Guilherme Vargas",
        "telefone": "+55 (021) 7875-5886",
        "altura": 1.71,
        "peso": 66,
        "salario": 40322,
        "data_nasc": "1999-09-30",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "639.028.417-96",
        "nome": "Sr. Isaque Oliveira",
        "telefone": "11 0289-5171",
        "altura": 1.71,
        "peso": 76,
        "salario": 43242,
        "data_nasc": "2002-02-24",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "269.037.451-06",
        "nome": "Alice Silveira",
        "telefone": "+55 21 5865 7809",
        "altura": 1.76,
        "peso": 69,
        "salario": 38392,
        "data_nasc": "1986-08-01",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "169.850.347-48",
        "nome": "João Pedro da Conceição",
        "telefone": "+55 (041) 0504 5562",
        "altura": 1.8,
        "peso": 89,
        "salario": 12185,
        "data_nasc": "1992-07-24",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "298.043.156-70",
        "nome": "Maria Sophia Nunes",
        "telefone": "+55 31 7474-0748",
        "altura": 1.66,
        "peso": 60,
        "salario": 32666,
        "data_nasc": "1989-08-18",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "946.523.701-99",
        "nome": "Pedro Miguel Ferreira",
        "telefone": "(081) 1369-5944",
        "altura": 1.84,
        "peso": 81,
        "salario": 35674,
        "data_nasc": "1984-12-31",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "097.621.583-77",
        "nome": "Maria Laura da Mota",
        "telefone": "0900-421-0470",
        "altura": 1.81,
        "peso": 97,
        "salario": 5752,
        "data_nasc": "2003-12-22",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "562.184.739-37",
        "nome": "Sr. Caleb da Rocha",
        "telefone": "+55 (041) 4745-1712",
        "altura": 1.87,
        "peso": 74,
        "salario": 40190,
        "data_nasc": "1991-12-06",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "516.024.789-02",
        "nome": "Maria Laura Novais",
        "telefone": "+55 71 9651-3709",
        "altura": 1.9,
        "peso": 100,
        "salario": 12310,
        "data_nasc": "2003-05-10",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "746.019.852-85",
        "nome": "Sr. Benício Porto",
        "telefone": "+55 61 1382 6758",
        "altura": 1.72,
        "peso": 64,
        "salario": 52323,
        "data_nasc": "1998-07-07",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "176.208.934-31",
        "nome": "Daniela Leão",
        "telefone": "+55 41 5158-5064",
        "altura": 1.95,
        "peso": 86,
        "salario": 54935,
        "data_nasc": "1990-09-17",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "308.621.457-08",
        "nome": "Rafael Borges",
        "telefone": "+55 (084) 8393 3529",
        "altura": 1.67,
        "peso": 81,
        "salario": 45979,
        "data_nasc": "1984-05-08",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "842.056.193-24",
        "nome": "Diogo Cardoso",
        "telefone": "+55 41 9502-4026",
        "altura": 1.72,
        "peso": 78,
        "salario": 18035,
        "data_nasc": "2002-02-25",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "751.349.028-79",
        "nome": "Benício Melo",
        "telefone": "(051) 0076-6177",
        "altura": 1.66,
        "peso": 76,
        "salario": 56028,
        "data_nasc": "1986-10-03",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "219.745.683-00",
        "nome": "Lorenzo Pereira",
        "telefone": "(051) 8961-1836",
        "altura": 1.97,
        "peso": 113,
        "salario": 26243,
        "data_nasc": "1999-08-14",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "768.502.314-80",
        "nome": "Noah Fernandes",
        "telefone": "31 2711 1161",
        "altura": 1.8,
        "peso": 68,
        "salario": 59504,
        "data_nasc": "1996-12-07",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "895.703.241-04",
        "nome": "Bento Pastor",
        "telefone": "+55 (071) 4945 1983",
        "altura": 1.92,
        "peso": 83,
        "salario": 42182,
        "data_nasc": "1989-07-08",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "158.024.936-15",
        "nome": "Rafaela Câmara",
        "telefone": "0500-402-4455",
        "altura": 1.98,
        "peso": 82,
        "salario": 58478,
        "data_nasc": "1984-06-17",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "612.590.473-34",
        "nome": "Diego Nunes",
        "telefone": "41 6752 5459",
        "altura": 1.63,
        "peso": 73,
        "salario": 13241,
        "data_nasc": "2004-07-16",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "201.935.467-52",
        "nome": "Benjamim Cassiano",
        "telefone": "84 4381 5614",
        "altura": 1.65,
        "peso": 67,
        "salario": 15821,
        "data_nasc": "2004-06-08",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "403.798.561-66",
        "nome": "Valentina Rios",
        "telefone": "+55 11 2445-1076",
        "altura": 1.71,
        "peso": 84,
        "salario": 18880,
        "data_nasc": "1990-03-26",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "385.096.741-75",
        "nome": "Mateus Nascimento",
        "telefone": "+55 11 5969 6641",
        "altura": 1.97,
        "peso": 107,
        "salario": 18182,
        "data_nasc": "1998-01-13",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "975.036.182-21",
        "nome": "Luan Cavalcante",
        "telefone": "51 1645 3521",
        "altura": 1.89,
        "peso": 86,
        "salario": 47590,
        "data_nasc": "2001-08-16",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "835.271.406-62",
        "nome": "Bruna Moura",
        "telefone": "+55 61 3292-1277",
        "altura": 1.75,
        "peso": 89,
        "salario": 12930,
        "data_nasc": "2003-06-08",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "958.130.762-12",
        "nome": "Melissa Rodrigues",
        "telefone": "+55 84 9058-1477",
        "altura": 1.7,
        "peso": 60,
        "salario": 43555,
        "data_nasc": "1985-07-14",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "196.345.087-66",
        "nome": "Léo da Paz",
        "telefone": "(061) 9782 0715",
        "altura": 1.82,
        "peso": 86,
        "salario": 9652,
        "data_nasc": "1987-02-15",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "378.465.192-55",
        "nome": "Emanuella Aparecida",
        "telefone": "(011) 6659 0515",
        "altura": 1.88,
        "peso": 73,
        "salario": 7058,
        "data_nasc": "1987-06-21",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "425.091.873-41",
        "nome": "Maria Isis da Paz",
        "telefone": "+55 81 9148 6528",
        "altura": 1.94,
        "peso": 78,
        "salario": 23250,
        "data_nasc": "1987-06-08",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "509.217.648-20",
        "nome": "Mariana Moraes",
        "telefone": "+55 21 2214-1888",
        "altura": 1.87,
        "peso": 77,
        "salario": 52405,
        "data_nasc": "1985-07-16",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "926.175.483-09",
        "nome": "Maitê Vargas",
        "telefone": "+55 (061) 6537 9473",
        "altura": 1.97,
        "peso": 100,
        "salario": 20925,
        "data_nasc": "2002-06-04",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "735.948.612-28",
        "nome": "Leonardo Viana",
        "telefone": "21 8623-9240",
        "altura": 1.91,
        "peso": 102,
        "salario": 11181,
        "data_nasc": "2006-01-26",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "189.207.645-49",
        "nome": "Maria Fernanda Novaes",
        "telefone": "(021) 1375-0606",
        "altura": 1.64,
        "peso": 65,
        "salario": 31941,
        "data_nasc": "2001-05-02",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "530.276.194-70",
        "nome": "Sr. Matheus Barros",
        "telefone": "(011) 7277 9010",
        "altura": 1.79,
        "peso": 87,
        "salario": 47824,
        "data_nasc": "1992-12-17",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "986.021.573-12",
        "nome": "Dom Novaes",
        "telefone": "+55 41 6971-1798",
        "altura": 1.99,
        "peso": 83,
        "salario": 52724,
        "data_nasc": "1984-10-24",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "324.907.851-41",
        "nome": "Sophie Oliveira",
        "telefone": "+55 (061) 1851-8888",
        "altura": 1.74,
        "peso": 87,
        "salario": 17556,
        "data_nasc": "2003-02-09",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "065.279.841-11",
        "nome": "Mathias Melo",
        "telefone": "+55 41 1952-0585",
        "altura": 1.68,
        "peso": 69,
        "salario": 17025,
        "data_nasc": "2006-02-15",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "728.053.614-07",
        "nome": "Ravi Sampaio",
        "telefone": "+55 (061) 3054 8687",
        "altura": 1.71,
        "peso": 66,
        "salario": 9940,
        "data_nasc": "1992-11-15",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "509.286.314-51",
        "nome": "Gabriel da Paz",
        "telefone": "51 5277 5841",
        "altura": 1.78,
        "peso": 91,
        "salario": 11416,
        "data_nasc": "1998-09-12",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "284.905.631-60",
        "nome": "Pedro Pereira",
        "telefone": "(041) 7962 7570",
        "altura": 1.62,
        "peso": 79,
        "salario": 5967,
        "data_nasc": "1996-04-01",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "016.248.935-89",
        "nome": "Maya da Mota",
        "telefone": "+55 (051) 2135 5690",
        "altura": 1.99,
        "peso": 116,
        "salario": 20491,
        "data_nasc": "2004-11-03",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "571.486.293-73",
        "nome": "Rael Freitas",
        "telefone": "+55 84 3102-7868",
        "altura": 1.67,
        "peso": 69,
        "salario": 31282,
        "data_nasc": "1988-04-05",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "734.581.062-35",
        "nome": "José Pedro Santos",
        "telefone": "(041) 2715-5188",
        "altura": 1.96,
        "peso": 83,
        "salario": 30586,
        "data_nasc": "1994-02-18",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "253.018.476-35",
        "nome": "Emanuel Silva",
        "telefone": "21 8957 8291",
        "altura": 1.71,
        "peso": 81,
        "salario": 23694,
        "data_nasc": "1986-06-29",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "786.934.051-01",
        "nome": "Miguel Silva",
        "telefone": "+55 11 7785 2892",
        "altura": 1.77,
        "peso": 93,
        "salario": 41422,
        "data_nasc": "1988-08-23",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "182.795.630-59",
        "nome": "Sarah Araújo",
        "telefone": "(084) 8414 3842",
        "altura": 1.86,
        "peso": 86,
        "salario": 24445,
        "data_nasc": "2005-07-09",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "829.154.730-05",
        "nome": "Vitor Borges",
        "telefone": "+55 (041) 1094 3969",
        "altura": 1.69,
        "peso": 59,
        "salario": 40533,
        "data_nasc": "2005-12-30",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "849.316.250-70",
        "nome": "Theo Pires",
        "telefone": "+55 (081) 2767 7359",
        "altura": 1.62,
        "peso": 61,
        "salario": 43284,
        "data_nasc": "1989-02-21",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "251.973.086-21",
        "nome": "Dr. Luiz Felipe Guerra",
        "telefone": "+55 51 2104 6963",
        "altura": 1.79,
        "peso": 94,
        "salario": 15317,
        "data_nasc": "1989-09-08",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "278.396.041-96",
        "nome": "Dr. Gabriel Teixeira",
        "telefone": "21 7339-5004",
        "altura": 1.62,
        "peso": 66,
        "salario": 17178,
        "data_nasc": "2001-02-03",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "801.372.456-53",
        "nome": "Olivia da Paz",
        "telefone": "+55 (061) 6098 3584",
        "altura": 1.63,
        "peso": 55,
        "salario": 20414,
        "data_nasc": "1986-10-03",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "841.703.269-03",
        "nome": "Sofia Machado",
        "telefone": "+55 (011) 3986-8000",
        "altura": 1.76,
        "peso": 91,
        "salario": 21135,
        "data_nasc": "1988-12-01",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "728.946.135-55",
        "nome": "Sra. Olívia Moreira",
        "telefone": "0900 588 8794",
        "altura": 1.83,
        "peso": 68,
        "salario": 32474,
        "data_nasc": "2000-05-30",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "164.850.397-75",
        "nome": "Léo Farias",
        "telefone": "+55 (071) 9728 9623",
        "altura": 1.86,
        "peso": 89,
        "salario": 22089,
        "data_nasc": "1985-04-30",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "075.316.842-17",
        "nome": "Brenda Correia",
        "telefone": "+55 (081) 2838 5786",
        "altura": 1.68,
        "peso": 77,
        "salario": 22407,
        "data_nasc": "1994-12-06",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "738.246.195-55",
        "nome": "Dr. João Pimenta",
        "telefone": "+55 (084) 7575-8441",
        "altura": 1.76,
        "peso": 83,
        "salario": 34964,
        "data_nasc": "2003-10-07",
        "tecnico": "103.862.547-53"
    },
    {
        "CPF": "652.709.814-67",
        "nome": "Ísis Garcia",
        "telefone": "+55 61 7338-4842",
        "altura": 1.73,
        "peso": 82,
        "salario": 5610,
        "data_nasc": "1987-12-21",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "083.519.462-06",
        "nome": "Isabella da Cruz",
        "telefone": "(071) 1208-2677",
        "altura": 1.78,
        "peso": 95,
        "salario": 9801,
        "data_nasc": "2006-05-22",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "401.597.836-66",
        "nome": "João Pedro Duarte",
        "telefone": "+55 (051) 0672-4004",
        "altura": 1.82,
        "peso": 83,
        "salario": 27872,
        "data_nasc": "2003-07-31",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "478.193.205-32",
        "nome": "Bianca Farias",
        "telefone": "(071) 2742 0549",
        "altura": 1.95,
        "peso": 109,
        "salario": 23676,
        "data_nasc": "2007-03-15",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "695.038.147-66",
        "nome": "Erick Pimenta",
        "telefone": "(061) 3046 3745",
        "altura": 1.66,
        "peso": 78,
        "salario": 24825,
        "data_nasc": "1994-07-12",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "530.978.261-30",
        "nome": "Alexia da Luz",
        "telefone": "21 4145-9332",
        "altura": 1.84,
        "peso": 101,
        "salario": 39664,
        "data_nasc": "2000-07-10",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "956.843.102-06",
        "nome": "Rafael Souza",
        "telefone": "51 7851 9108",
        "altura": 1.6,
        "peso": 72,
        "salario": 48475,
        "data_nasc": "2001-06-14",
        "tecnico": "103.862.547-53"
    },
    {
        "CPF": "257.081.364-80",
        "nome": "Vitor Gabriel Cassiano",
        "telefone": "+55 (081) 7286 7908",
        "altura": 1.64,
        "peso": 77,
        "salario": 12564,
        "data_nasc": "1999-12-27",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "064.891.537-93",
        "nome": "Lorena Silveira",
        "telefone": "(084) 1801 7046",
        "altura": 1.96,
        "peso": 105,
        "salario": 22848,
        "data_nasc": "1990-05-18",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "679.304.128-22",
        "nome": "Otto Freitas",
        "telefone": "+55 71 2868 2300",
        "altura": 1.71,
        "peso": 65,
        "salario": 18342,
        "data_nasc": "1994-05-28",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "863.172.950-77",
        "nome": "Ísis Lima",
        "telefone": "+55 61 0690 3311",
        "altura": 1.87,
        "peso": 100,
        "salario": 37016,
        "data_nasc": "2004-06-18",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "039.861.472-50",
        "nome": "Pietro Peixoto",
        "telefone": "21 4395-9953",
        "altura": 1.7,
        "peso": 84,
        "salario": 11048,
        "data_nasc": "1994-07-10",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "648.075.123-07",
        "nome": "Vicente Câmara",
        "telefone": "84 7056-8566",
        "altura": 1.85,
        "peso": 97,
        "salario": 5232,
        "data_nasc": "1989-05-01",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "873.612.590-30",
        "nome": "Marcos Vinicius Cirino",
        "telefone": "84 6688-2634",
        "altura": 1.73,
        "peso": 64,
        "salario": 15589,
        "data_nasc": "1991-03-04",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "183.027.645-07",
        "nome": "Sr. Rael Freitas",
        "telefone": "0900 837 3540",
        "altura": 1.9,
        "peso": 92,
        "salario": 41759,
        "data_nasc": "1991-06-18",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "738.914.256-19",
        "nome": "Dante Souza",
        "telefone": "(061) 8544-5877",
        "altura": 1.6,
        "peso": 53,
        "salario": 50286,
        "data_nasc": "1987-08-11",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "596.041.873-84",
        "nome": "Sra. Luiza Costela",
        "telefone": "81 9964-2353",
        "altura": 1.96,
        "peso": 98,
        "salario": 29196,
        "data_nasc": "1997-03-06",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "854.639.701-57",
        "nome": "Isabelly Monteiro",
        "telefone": "+55 (041) 2872-8080",
        "altura": 1.83,
        "peso": 72,
        "salario": 7741,
        "data_nasc": "1986-10-13",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "062.851.973-77",
        "nome": "Ana Julia Teixeira",
        "telefone": "+55 (021) 3875 0997",
        "altura": 1.72,
        "peso": 86,
        "salario": 7614,
        "data_nasc": "2006-09-08",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "896.074.231-78",
        "nome": "Allana Abreu",
        "telefone": "+55 (031) 8621 1823",
        "altura": 1.96,
        "peso": 85,
        "salario": 48708,
        "data_nasc": "1990-10-14",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "546.023.897-83",
        "nome": "Valentina da Cunha",
        "telefone": "+55 21 4101-6668",
        "altura": 1.64,
        "peso": 75,
        "salario": 31632,
        "data_nasc": "2000-06-13",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "217.639.045-80",
        "nome": "Anthony Sampaio",
        "telefone": "+55 31 3974-0148",
        "altura": 1.99,
        "peso": 109,
        "salario": 20514,
        "data_nasc": "2003-06-06",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "503.417.896-66",
        "nome": "Ana Beatriz Cavalcanti",
        "telefone": "0300 396 8562",
        "altura": 1.95,
        "peso": 113,
        "salario": 16603,
        "data_nasc": "1986-12-03",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "163.802.795-12",
        "nome": "Manuella Aragão",
        "telefone": "+55 81 7735-8662",
        "altura": 1.95,
        "peso": 77,
        "salario": 26770,
        "data_nasc": "2004-03-10",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "943.506.281-42",
        "nome": "Maria Helena Barros",
        "telefone": "+55 (021) 6551-1047",
        "altura": 1.91,
        "peso": 88,
        "salario": 53172,
        "data_nasc": "1996-07-01",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "126.345.708-80",
        "nome": "Cauã Cardoso",
        "telefone": "+55 31 5819 9560",
        "altura": 1.92,
        "peso": 84,
        "salario": 50958,
        "data_nasc": "1994-03-08",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "183.469.702-69",
        "nome": "Maria Julia Vasconcelos",
        "telefone": "+55 81 4472-1264",
        "altura": 1.64,
        "peso": 77,
        "salario": 35847,
        "data_nasc": "1998-08-01",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "154.983.670-66",
        "nome": "Rodrigo Viana",
        "telefone": "+55 84 4065 9657",
        "altura": 1.69,
        "peso": 80,
        "salario": 27915,
        "data_nasc": "1995-08-23",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "537.218.694-19",
        "nome": "Catarina da Rosa",
        "telefone": "0500 356 4651",
        "altura": 1.72,
        "peso": 83,
        "salario": 19609,
        "data_nasc": "2003-06-10",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "807.513.249-14",
        "nome": "Yago Cirino",
        "telefone": "81 7243 4266",
        "altura": 1.61,
        "peso": 57,
        "salario": 23258,
        "data_nasc": "1986-10-09",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "689.402.537-10",
        "nome": "Pietra Pacheco",
        "telefone": "11 2909 6561",
        "altura": 1.95,
        "peso": 113,
        "salario": 28012,
        "data_nasc": "1984-08-12",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "893.726.450-10",
        "nome": "José Pedro Câmara",
        "telefone": "(084) 0714 6112",
        "altura": 1.86,
        "peso": 83,
        "salario": 40141,
        "data_nasc": "1996-02-08",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "387.290.561-95",
        "nome": "Luigi Marques",
        "telefone": "(051) 1401 0512",
        "altura": 1.73,
        "peso": 61,
        "salario": 22118,
        "data_nasc": "1992-07-21",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "256.317.804-53",
        "nome": "Emanuella Novaes",
        "telefone": "61 0937 9660",
        "altura": 1.67,
        "peso": 83,
        "salario": 7507,
        "data_nasc": "1991-07-25",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "192.768.304-13",
        "nome": "João Lucas Sá",
        "telefone": "(084) 8596-9691",
        "altura": 1.64,
        "peso": 65,
        "salario": 56539,
        "data_nasc": "1996-02-03",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "412.708.653-07",
        "nome": "Dr. Erick Rocha",
        "telefone": "31 2866 9296",
        "altura": 1.73,
        "peso": 78,
        "salario": 12578,
        "data_nasc": "1998-08-25",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "829.371.465-46",
        "nome": "Ryan Porto",
        "telefone": "0900-050-7236",
        "altura": 1.75,
        "peso": 79,
        "salario": 7908,
        "data_nasc": "2003-05-13",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "769.310.485-20",
        "nome": "Sabrina Jesus",
        "telefone": "+55 (051) 4384 2797",
        "altura": 1.88,
        "peso": 71,
        "salario": 57855,
        "data_nasc": "2002-12-16",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "145.803.967-66",
        "nome": "Brenda Oliveira",
        "telefone": "+55 51 4074 5171",
        "altura": 1.82,
        "peso": 90,
        "salario": 53302,
        "data_nasc": "1992-04-25",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "962.415.803-70",
        "nome": "Luiz Fernando Santos",
        "telefone": "61 4982-5449",
        "altura": 1.87,
        "peso": 83,
        "salario": 48531,
        "data_nasc": "1993-05-08",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "604.951.782-76",
        "nome": "Aylla Carvalho",
        "telefone": "(061) 3672 9466",
        "altura": 1.97,
        "peso": 102,
        "salario": 13167,
        "data_nasc": "1999-08-20",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "845.362.097-00",
        "nome": "Caleb Guerra",
        "telefone": "(051) 5186-3637",
        "altura": 1.89,
        "peso": 82,
        "salario": 48705,
        "data_nasc": "1993-05-23",
        "tecnico": "103.862.547-53"
    },
    {
        "CPF": "927.680.431-50",
        "nome": "Dr. Lucca Novaes",
        "telefone": "+55 (031) 1277 0632",
        "altura": 1.76,
        "peso": 74,
        "salario": 41333,
        "data_nasc": "2006-05-15",
        "tecnico": "103.862.547-53"
    },
    {
        "CPF": "154.029.678-49",
        "nome": "Emanuel da Mota",
        "telefone": "+55 31 6110-3712",
        "altura": 1.65,
        "peso": 66,
        "salario": 49388,
        "data_nasc": "2004-06-14",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "708.529.364-00",
        "nome": "Valentim Rodrigues",
        "telefone": "(081) 1361-1155",
        "altura": 1.9,
        "peso": 78,
        "salario": 24723,
        "data_nasc": "1994-06-09",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "291.460.738-50",
        "nome": "Mateus Vasconcelos",
        "telefone": "+55 11 2697-3112",
        "altura": 1.76,
        "peso": 88,
        "salario": 23803,
        "data_nasc": "1988-06-11",
        "tecnico": "103.862.547-53"
    },
    {
        "CPF": "652.170.983-68",
        "nome": "Maria Isis Ferreira",
        "telefone": "+55 (041) 4389 8364",
        "altura": 1.68,
        "peso": 79,
        "salario": 47906,
        "data_nasc": "2006-03-29",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "613.754.029-43",
        "nome": "Isaque Monteiro",
        "telefone": "21 5269 6582",
        "altura": 1.73,
        "peso": 73,
        "salario": 19005,
        "data_nasc": "2000-04-12",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "104.985.326-15",
        "nome": "Antony Pastor",
        "telefone": "21 6661-8892",
        "altura": 1.8,
        "peso": 91,
        "salario": 53231,
        "data_nasc": "1993-09-11",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "832.479.015-23",
        "nome": "Leonardo Barros",
        "telefone": "+55 41 0316-1799",
        "altura": 1.67,
        "peso": 58,
        "salario": 48506,
        "data_nasc": "1986-02-15",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "029.138.476-50",
        "nome": "Erick Campos",
        "telefone": "+55 81 4105 6481",
        "altura": 1.85,
        "peso": 80,
        "salario": 54226,
        "data_nasc": "1993-03-14",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "785.034.196-10",
        "nome": "Dra. Ana Vitória Monteiro",
        "telefone": "+55 61 1913-8000",
        "altura": 1.69,
        "peso": 66,
        "salario": 18050,
        "data_nasc": "1992-07-29",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "628.904.351-05",
        "nome": "Ravy Fonseca",
        "telefone": "+55 51 6541 9518",
        "altura": 1.66,
        "peso": 56,
        "salario": 45060,
        "data_nasc": "2007-03-01",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "806.932.417-13",
        "nome": "Felipe Câmara",
        "telefone": "81 7053-4949",
        "altura": 1.94,
        "peso": 78,
        "salario": 46272,
        "data_nasc": "1992-07-04",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "738.109.546-75",
        "nome": "Maria Eduarda Pastor",
        "telefone": "+55 (021) 5064 1383",
        "altura": 1.83,
        "peso": 91,
        "salario": 37399,
        "data_nasc": "1998-07-16",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "410.893.267-69",
        "nome": "Ana Liz Casa Grande",
        "telefone": "0800 182 6199",
        "altura": 1.76,
        "peso": 67,
        "salario": 5363,
        "data_nasc": "1986-05-17",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "495.632.817-64",
        "nome": "Caroline da Costa",
        "telefone": "+55 31 1329-1212",
        "altura": 1.96,
        "peso": 110,
        "salario": 11985,
        "data_nasc": "1999-07-21",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "185.693.274-55",
        "nome": "Luara Jesus",
        "telefone": "+55 71 1249 0352",
        "altura": 1.91,
        "peso": 81,
        "salario": 50607,
        "data_nasc": "1987-05-11",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "804.219.357-23",
        "nome": "Srta. Maria Alice Gonçalves",
        "telefone": "+55 41 7121 0032",
        "altura": 1.81,
        "peso": 67,
        "salario": 12953,
        "data_nasc": "1990-12-30",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "149.067.352-07",
        "nome": "Maria Fernanda Rodrigues",
        "telefone": "(071) 1070 2966",
        "altura": 1.78,
        "peso": 89,
        "salario": 39808,
        "data_nasc": "2001-02-18",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "625.198.470-85",
        "nome": "Mateus Rodrigues",
        "telefone": "+55 (051) 9993 4768",
        "altura": 2.0,
        "peso": 104,
        "salario": 34004,
        "data_nasc": "2000-07-21",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "629.154.780-58",
        "nome": "Caio da Mota",
        "telefone": "41 5787 5985",
        "altura": 1.85,
        "peso": 93,
        "salario": 32966,
        "data_nasc": "1997-06-20",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "530.627.891-40",
        "nome": "Fernando Alves",
        "telefone": "0800 321 3348",
        "altura": 1.93,
        "peso": 95,
        "salario": 15430,
        "data_nasc": "1986-02-26",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "293.485.061-70",
        "nome": "Mathias Fogaça",
        "telefone": "0300 929 3784",
        "altura": 1.9,
        "peso": 89,
        "salario": 54268,
        "data_nasc": "1990-03-24",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "038.947.615-39",
        "nome": "Ana Carolina Borges",
        "telefone": "+55 81 5250 0292",
        "altura": 1.7,
        "peso": 76,
        "salario": 55965,
        "data_nasc": "1988-01-11",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "561.289.703-03",
        "nome": "Maria Clara Barbosa",
        "telefone": "(084) 5289-5392",
        "altura": 1.81,
        "peso": 86,
        "salario": 33827,
        "data_nasc": "1997-02-16",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "206.748.193-22",
        "nome": "Juan Cardoso",
        "telefone": "0800-391-7251",
        "altura": 1.63,
        "peso": 61,
        "salario": 27010,
        "data_nasc": "1992-05-08",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "157.029.486-02",
        "nome": "Dr. Enzo Porto",
        "telefone": "(084) 4100 6762",
        "altura": 1.73,
        "peso": 76,
        "salario": 14884,
        "data_nasc": "1998-05-05",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "861.934.705-57",
        "nome": "Maria Flor Ferreira",
        "telefone": "+55 11 0405 4115",
        "altura": 1.69,
        "peso": 77,
        "salario": 19021,
        "data_nasc": "1990-01-15",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "189.245.360-60",
        "nome": "Elisa Siqueira",
        "telefone": "(021) 2962-0153",
        "altura": 1.63,
        "peso": 64,
        "salario": 35534,
        "data_nasc": "1990-09-20",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "493.067.852-83",
        "nome": "Ágatha da Luz",
        "telefone": "21 0614 9731",
        "altura": 1.77,
        "peso": 69,
        "salario": 30524,
        "data_nasc": "1985-02-16",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "417.602.389-96",
        "nome": "Enzo Gabriel Porto",
        "telefone": "+55 71 1862-5652",
        "altura": 1.96,
        "peso": 99,
        "salario": 6280,
        "data_nasc": "1999-06-03",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "743.628.095-38",
        "nome": "João Macedo",
        "telefone": "+55 21 5869 3806",
        "altura": 1.94,
        "peso": 104,
        "salario": 36259,
        "data_nasc": "2002-01-13",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "739.208.564-65",
        "nome": "Zoe Rodrigues",
        "telefone": "+55 71 7223 3206",
        "altura": 1.6,
        "peso": 60,
        "salario": 30558,
        "data_nasc": "1986-12-02",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "245.706.391-43",
        "nome": "Maya Costa",
        "telefone": "81 5487-0998",
        "altura": 1.94,
        "peso": 111,
        "salario": 40272,
        "data_nasc": "1998-07-13",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "218.409.673-31",
        "nome": "Oliver Cassiano",
        "telefone": "51 7997 0246",
        "altura": 1.9,
        "peso": 92,
        "salario": 19453,
        "data_nasc": "1989-02-23",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "653.087.219-12",
        "nome": "Maria Liz Andrade",
        "telefone": "(081) 4447 1324",
        "altura": 1.8,
        "peso": 74,
        "salario": 6902,
        "data_nasc": "1999-05-01",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "137.985.204-88",
        "nome": "Dr. Oliver Pereira",
        "telefone": "+55 (084) 4862 8902",
        "altura": 1.76,
        "peso": 83,
        "salario": 31497,
        "data_nasc": "1990-10-24",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "079.251.643-52",
        "nome": "Benjamin da Cruz",
        "telefone": "21 6103-5797",
        "altura": 1.89,
        "peso": 101,
        "salario": 13364,
        "data_nasc": "1990-04-18",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "241.903.586-06",
        "nome": "Marcela Ferreira",
        "telefone": "+55 21 3346-8007",
        "altura": 1.99,
        "peso": 100,
        "salario": 30822,
        "data_nasc": "1988-10-03",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "034.725.816-62",
        "nome": "Emanuella Peixoto",
        "telefone": "(051) 4374-8969",
        "altura": 1.84,
        "peso": 90,
        "salario": 47123,
        "data_nasc": "1987-09-26",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "584.290.371-79",
        "nome": "Thomas Ribeiro",
        "telefone": "+55 84 5444-3283",
        "altura": 1.77,
        "peso": 90,
        "salario": 8295,
        "data_nasc": "1986-03-09",
        "tecnico": "710.698.423-03"
    },
    {
        "CPF": "520.938.416-06",
        "nome": "Maria Luiza Ribeiro",
        "telefone": "51 0993 5387",
        "altura": 1.7,
        "peso": 67,
        "salario": 26420,
        "data_nasc": "2007-02-11",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "824.031.956-42",
        "nome": "Dr. Enzo Gabriel Ribeiro",
        "telefone": "(071) 1353 4655",
        "altura": 1.74,
        "peso": 87,
        "salario": 54283,
        "data_nasc": "1993-02-13",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "170.654.893-10",
        "nome": "Laís Martins",
        "telefone": "21 1684-6022",
        "altura": 1.98,
        "peso": 95,
        "salario": 10367,
        "data_nasc": "1991-01-26",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "521.387.960-86",
        "nome": "Dr. Raul Casa Grande",
        "telefone": "+55 (011) 7432 9271",
        "altura": 1.79,
        "peso": 88,
        "salario": 27935,
        "data_nasc": "1988-08-28",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "698.370.425-83",
        "nome": "Maya Porto",
        "telefone": "31 0583 0033",
        "altura": 1.69,
        "peso": 59,
        "salario": 7638,
        "data_nasc": "1995-12-21",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "684.105.293-51",
        "nome": "Davi Lucca Caldeira",
        "telefone": "41 9856-2575",
        "altura": 1.9,
        "peso": 106,
        "salario": 59999,
        "data_nasc": "1990-08-31",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "392.150.648-42",
        "nome": "Nathan Almeida",
        "telefone": "+55 (051) 6489 0901",
        "altura": 1.61,
        "peso": 56,
        "salario": 36035,
        "data_nasc": "2006-06-29",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "167.304.295-34",
        "nome": "Benicio Sales",
        "telefone": "+55 (084) 0461-8499",
        "altura": 1.87,
        "peso": 90,
        "salario": 35476,
        "data_nasc": "1988-12-02",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "914.063.825-15",
        "nome": "Bella Moraes",
        "telefone": "+55 71 8356-4208",
        "altura": 1.88,
        "peso": 98,
        "salario": 44707,
        "data_nasc": "2001-02-21",
        "tecnico": "710.698.423-03"
    },
    {
        "CPF": "308.576.942-00",
        "nome": "Rodrigo Farias",
        "telefone": "31 1143-7447",
        "altura": 1.84,
        "peso": 93,
        "salario": 55973,
        "data_nasc": "1985-12-16",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "458.370.962-56",
        "nome": "Erick Aparecida",
        "telefone": "+55 84 2557 9415",
        "altura": 1.93,
        "peso": 110,
        "salario": 42924,
        "data_nasc": "1995-12-01",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "674.935.820-92",
        "nome": "Danilo Guerra",
        "telefone": "+55 61 2021 6979",
        "altura": 1.61,
        "peso": 60,
        "salario": 29596,
        "data_nasc": "1999-03-01",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "716.305.298-77",
        "nome": "Sr. Davi Lucca Mendes",
        "telefone": "+55 (021) 8993 5889",
        "altura": 1.76,
        "peso": 84,
        "salario": 43803,
        "data_nasc": "1987-06-30",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "562.849.037-74",
        "nome": "Isadora Mendes",
        "telefone": "21 7721-7535",
        "altura": 1.88,
        "peso": 93,
        "salario": 50691,
        "data_nasc": "1993-09-19",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "869.710.352-59",
        "nome": "Thiago Câmara",
        "telefone": "+55 31 7751 7016",
        "altura": 1.91,
        "peso": 104,
        "salario": 57791,
        "data_nasc": "1998-04-14",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "143.567.290-99",
        "nome": "Yan Abreu",
        "telefone": "+55 21 7589-9757",
        "altura": 1.65,
        "peso": 81,
        "salario": 7691,
        "data_nasc": "1988-02-19",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "594.762.038-38",
        "nome": "Henry Abreu",
        "telefone": "11 2614-9331",
        "altura": 1.74,
        "peso": 74,
        "salario": 9519,
        "data_nasc": "1997-08-15",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "351.690.472-07",
        "nome": "Raul Viana",
        "telefone": "0900 827 0808",
        "altura": 1.8,
        "peso": 76,
        "salario": 32528,
        "data_nasc": "1998-12-24",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "298.034.751-50",
        "nome": "Rafaela Moraes",
        "telefone": "84 9346 5472",
        "altura": 1.93,
        "peso": 78,
        "salario": 46653,
        "data_nasc": "1988-12-15",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "853.164.279-55",
        "nome": "Sophie da Rosa",
        "telefone": "+55 81 2885 1587",
        "altura": 1.96,
        "peso": 94,
        "salario": 33540,
        "data_nasc": "2004-01-31",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "846.709.531-84",
        "nome": "Maria Vitória Rocha",
        "telefone": "+55 (011) 0034-2442",
        "altura": 1.67,
        "peso": 70,
        "salario": 22700,
        "data_nasc": "1986-05-13",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "805.639.127-40",
        "nome": "Sra. Gabrielly Sá",
        "telefone": "+55 41 8406-6658",
        "altura": 1.85,
        "peso": 100,
        "salario": 36686,
        "data_nasc": "1986-01-31",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "973.562.140-16",
        "nome": "José Costa",
        "telefone": "(021) 7212 2816",
        "altura": 1.79,
        "peso": 91,
        "salario": 22589,
        "data_nasc": "1985-08-20",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "428.970.516-20",
        "nome": "Lara Novais",
        "telefone": "+55 (061) 2590 9479",
        "altura": 1.73,
        "peso": 67,
        "salario": 10679,
        "data_nasc": "2002-12-22",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "321.647.985-46",
        "nome": "Sr. Liam Moura",
        "telefone": "+55 31 5335 5543",
        "altura": 1.71,
        "peso": 72,
        "salario": 35455,
        "data_nasc": "2005-04-16",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "015.384.796-48",
        "nome": "Olívia Novais",
        "telefone": "41 1648 4085",
        "altura": 1.83,
        "peso": 89,
        "salario": 6880,
        "data_nasc": "2001-10-02",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "043.289.576-00",
        "nome": "Melissa Mendonça",
        "telefone": "+55 (084) 3361 3861",
        "altura": 1.8,
        "peso": 75,
        "salario": 18901,
        "data_nasc": "1989-06-26",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "501.867.239-03",
        "nome": "Raul Silva",
        "telefone": "0500 346 6766",
        "altura": 1.74,
        "peso": 68,
        "salario": 44069,
        "data_nasc": "1995-01-08",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "180.564.723-71",
        "nome": "Mathias Rocha",
        "telefone": "+55 11 5814 4914",
        "altura": 1.88,
        "peso": 80,
        "salario": 38857,
        "data_nasc": "1999-02-23",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "072.415.386-17",
        "nome": "Maria Laura Ribeiro",
        "telefone": "+55 (011) 4508-8210",
        "altura": 1.98,
        "peso": 82,
        "salario": 31635,
        "data_nasc": "1984-06-04",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "814.952.630-70",
        "nome": "Maria Júlia Nascimento",
        "telefone": "+55 (031) 2394-3129",
        "altura": 1.8,
        "peso": 89,
        "salario": 36201,
        "data_nasc": "1986-02-07",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "814.502.639-33",
        "nome": "Nicole Ramos",
        "telefone": "(071) 5231 4913",
        "altura": 1.86,
        "peso": 86,
        "salario": 6130,
        "data_nasc": "1995-01-25",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "942.867.510-58",
        "nome": "Milena Farias",
        "telefone": "+55 (011) 5336 4525",
        "altura": 1.64,
        "peso": 60,
        "salario": 20945,
        "data_nasc": "2000-08-01",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "471.859.063-93",
        "nome": "Melissa Fogaça",
        "telefone": "61 3411-0809",
        "altura": 1.72,
        "peso": 76,
        "salario": 41272,
        "data_nasc": "2003-12-14",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "847.512.306-62",
        "nome": "Hadassa Andrade",
        "telefone": "+55 84 7881 6580",
        "altura": 1.81,
        "peso": 79,
        "salario": 41070,
        "data_nasc": "2006-10-20",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "827.164.593-55",
        "nome": "Enzo Sá",
        "telefone": "11 0373 1453",
        "altura": 1.73,
        "peso": 81,
        "salario": 25094,
        "data_nasc": "1985-09-17",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "567.309.241-52",
        "nome": "Gabrielly Moreira",
        "telefone": "+55 71 9892-6659",
        "altura": 1.7,
        "peso": 61,
        "salario": 25679,
        "data_nasc": "2006-06-26",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "639.278.450-00",
        "nome": "Valentim da Cunha",
        "telefone": "21 2723-1843",
        "altura": 1.65,
        "peso": 69,
        "salario": 50230,
        "data_nasc": "1989-05-14",
        "tecnico": "287.041.653-90"
    },
    {
        "CPF": "913.720.658-30",
        "nome": "Emanuel Fonseca",
        "telefone": "(081) 3926-0302",
        "altura": 1.67,
        "peso": 62,
        "salario": 23120,
        "data_nasc": "2003-10-08",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "802.917.543-41",
        "nome": "Elisa Carvalho",
        "telefone": "0300-904-1379",
        "altura": 1.89,
        "peso": 106,
        "salario": 44111,
        "data_nasc": "2000-04-17",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "628.459.701-02",
        "nome": "Eloá Câmara",
        "telefone": "(051) 9913-6621",
        "altura": 1.71,
        "peso": 61,
        "salario": 24414,
        "data_nasc": "1984-10-25",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "621.734.085-26",
        "nome": "Vicente Montenegro",
        "telefone": "+55 31 7298 0686",
        "altura": 1.69,
        "peso": 62,
        "salario": 51400,
        "data_nasc": "1996-11-08",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "376.245.019-61",
        "nome": "Vinícius Lima",
        "telefone": "+55 61 7314-9864",
        "altura": 1.81,
        "peso": 75,
        "salario": 41264,
        "data_nasc": "1990-09-08",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "810.359.246-33",
        "nome": "André Oliveira",
        "telefone": "+55 51 2694 4869",
        "altura": 1.72,
        "peso": 87,
        "salario": 54334,
        "data_nasc": "1996-09-11",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "639.478.152-55",
        "nome": "Kamilly Rodrigues",
        "telefone": "+55 61 4956-2137",
        "altura": 1.8,
        "peso": 93,
        "salario": 23634,
        "data_nasc": "1989-10-04",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "650.137.489-84",
        "nome": "Heitor Moraes",
        "telefone": "0300-611-4351",
        "altura": 1.79,
        "peso": 78,
        "salario": 8367,
        "data_nasc": "2004-12-22",
        "tecnico": "710.698.423-03"
    },
    {
        "CPF": "984.570.123-04",
        "nome": "Matheus Guerra",
        "telefone": "(031) 0384-3098",
        "altura": 1.7,
        "peso": 83,
        "salario": 58878,
        "data_nasc": "2001-10-21",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "053.891.642-70",
        "nome": "Srta. Eloá Rocha",
        "telefone": "11 6693 8011",
        "altura": 1.63,
        "peso": 66,
        "salario": 46251,
        "data_nasc": "2002-12-15",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "438.769.015-10",
        "nome": "Luiz Fernando Ferreira",
        "telefone": "81 8181 8451",
        "altura": 1.87,
        "peso": 75,
        "salario": 41886,
        "data_nasc": "2001-09-19",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "947.386.152-46",
        "nome": "Vitor Gabriel Vieira",
        "telefone": "(051) 9071-4163",
        "altura": 1.98,
        "peso": 82,
        "salario": 12762,
        "data_nasc": "1992-01-29",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "804.129.356-51",
        "nome": "Dr. Luiz Gustavo Moreira",
        "telefone": "+55 11 8275 5394",
        "altura": 1.82,
        "peso": 80,
        "salario": 56821,
        "data_nasc": "1990-06-22",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "398.621.405-42",
        "nome": "Dra. Esther Monteiro",
        "telefone": "0900-521-1179",
        "altura": 1.85,
        "peso": 95,
        "salario": 34524,
        "data_nasc": "1984-06-24",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "597.423.186-46",
        "nome": "Ana Cecília Mendes",
        "telefone": "61 3920 8678",
        "altura": 1.96,
        "peso": 88,
        "salario": 33103,
        "data_nasc": "1985-05-12",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "271.543.960-16",
        "nome": "Manuella Gonçalves",
        "telefone": "+55 (021) 3691 5594",
        "altura": 1.72,
        "peso": 78,
        "salario": 53502,
        "data_nasc": "1990-08-15",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "475.213.908-14",
        "nome": "Julia da Costa",
        "telefone": "31 5647 2929",
        "altura": 1.64,
        "peso": 74,
        "salario": 18829,
        "data_nasc": "1992-01-12",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "869.175.302-12",
        "nome": "João Gabriel da Costa",
        "telefone": "84 7288 5744",
        "altura": 1.71,
        "peso": 61,
        "salario": 16391,
        "data_nasc": "2003-05-20",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "120.983.765-02",
        "nome": "Ana Julia Gonçalves",
        "telefone": "+55 71 5588-4506",
        "altura": 1.82,
        "peso": 71,
        "salario": 34524,
        "data_nasc": "1988-05-18",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "458.793.601-48",
        "nome": "Sr. Vitor Gabriel Cavalcanti",
        "telefone": "0800-472-2569",
        "altura": 1.88,
        "peso": 87,
        "salario": 20170,
        "data_nasc": "2003-09-15",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "253.968.471-82",
        "nome": "Ana Sophia Barros",
        "telefone": "+55 81 7598-7622",
        "altura": 1.72,
        "peso": 68,
        "salario": 34755,
        "data_nasc": "1985-01-15",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "413.870.956-84",
        "nome": "Isaac Ribeiro",
        "telefone": "81 0068-1149",
        "altura": 1.63,
        "peso": 59,
        "salario": 56631,
        "data_nasc": "1989-07-15",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "394.851.720-79",
        "nome": "Mathias das Neves",
        "telefone": "+55 (041) 0557 7848",
        "altura": 1.92,
        "peso": 95,
        "salario": 17964,
        "data_nasc": "1999-05-23",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "976.458.213-37",
        "nome": "Vitor Hugo Cavalcanti",
        "telefone": "71 3174-5642",
        "altura": 1.77,
        "peso": 80,
        "salario": 14764,
        "data_nasc": "1994-08-01",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "254.370.619-43",
        "nome": "Alexandre Moreira",
        "telefone": "+55 (021) 6493 0853",
        "altura": 1.96,
        "peso": 109,
        "salario": 8908,
        "data_nasc": "1998-04-06",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "326.791.804-96",
        "nome": "Maya Gonçalves",
        "telefone": "+55 41 8944-8463",
        "altura": 1.67,
        "peso": 64,
        "salario": 59017,
        "data_nasc": "1986-08-01",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "178.254.309-05",
        "nome": "Davi Luiz da Rocha",
        "telefone": "+55 (031) 2080 2144",
        "altura": 1.83,
        "peso": 77,
        "salario": 35716,
        "data_nasc": "1988-07-04",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "120.398.654-89",
        "nome": "Sra. Alexia da Conceição",
        "telefone": "31 7051 2046",
        "altura": 1.88,
        "peso": 95,
        "salario": 37798,
        "data_nasc": "1986-09-07",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "346.705.192-80",
        "nome": "Olivia Cirino",
        "telefone": "+55 51 0371 8376",
        "altura": 1.82,
        "peso": 81,
        "salario": 7612,
        "data_nasc": "1994-11-15",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "891.236.750-12",
        "nome": "Sr. Asafe Souza",
        "telefone": "+55 11 1365-0249",
        "altura": 1.96,
        "peso": 105,
        "salario": 21408,
        "data_nasc": "1988-04-28",
        "tecnico": "036.279.518-59"
    },
    {
        "CPF": "072.891.435-23",
        "nome": "Isabelly Albuquerque",
        "telefone": "0900-500-5281",
        "altura": 1.61,
        "peso": 58,
        "salario": 59785,
        "data_nasc": "1988-07-14",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "857.910.364-93",
        "nome": "Isabel Dias",
        "telefone": "+55 61 0778-4873",
        "altura": 1.94,
        "peso": 97,
        "salario": 55119,
        "data_nasc": "2003-07-15",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "574.689.102-94",
        "nome": "Yago Ferreira",
        "telefone": "(041) 4485-7086",
        "altura": 1.87,
        "peso": 79,
        "salario": 55011,
        "data_nasc": "1990-07-26",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "935.704.861-84",
        "nome": "Luiz Otávio Vasconcelos",
        "telefone": "81 2945-6511",
        "altura": 1.9,
        "peso": 89,
        "salario": 33981,
        "data_nasc": "2002-01-21",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "290.173.658-03",
        "nome": "Ana Lívia Aparecida",
        "telefone": "0500 678 9940",
        "altura": 1.97,
        "peso": 85,
        "salario": 33566,
        "data_nasc": "1996-09-19",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "371.950.268-68",
        "nome": "Brayan Albuquerque",
        "telefone": "31 0948 0141",
        "altura": 1.85,
        "peso": 85,
        "salario": 35802,
        "data_nasc": "1991-08-08",
        "tecnico": "169.428.530-89"
    },
    {
        "CPF": "386.174.520-80",
        "nome": "Aylla Brito",
        "telefone": "84 8619-5761",
        "altura": 1.74,
        "peso": 71,
        "salario": 11855,
        "data_nasc": "1989-12-06",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "852.463.719-64",
        "nome": "Yan Guerra",
        "telefone": "31 6659 3983",
        "altura": 1.94,
        "peso": 88,
        "salario": 37471,
        "data_nasc": "1997-01-06",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "796.058.234-38",
        "nome": "Jade Fonseca",
        "telefone": "41 2404-3350",
        "altura": 1.72,
        "peso": 87,
        "salario": 54840,
        "data_nasc": "1993-08-23",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "921.038.765-12",
        "nome": "Sophia Novais",
        "telefone": "21 9334 4196",
        "altura": 1.82,
        "peso": 81,
        "salario": 21541,
        "data_nasc": "2003-08-14",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "572.394.081-32",
        "nome": "Breno Silveira",
        "telefone": "+55 (051) 9610 5566",
        "altura": 1.73,
        "peso": 89,
        "salario": 38724,
        "data_nasc": "1988-05-10",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "604.782.135-90",
        "nome": "Anthony Porto",
        "telefone": "+55 (021) 0679-9813",
        "altura": 1.93,
        "peso": 75,
        "salario": 40559,
        "data_nasc": "1998-12-13",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "251.340.678-80",
        "nome": "Matteo Casa Grande",
        "telefone": "71 8622 7837",
        "altura": 1.78,
        "peso": 65,
        "salario": 28709,
        "data_nasc": "1997-09-14",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "983.102.765-59",
        "nome": "Fernanda Novais",
        "telefone": "+55 61 6655 3559",
        "altura": 1.85,
        "peso": 86,
        "salario": 54806,
        "data_nasc": "2006-07-22",
        "tecnico": "435.128.679-28"
    },
    {
        "CPF": "572.301.486-26",
        "nome": "Leandro Cavalcante",
        "telefone": "+55 (021) 1103-9240",
        "altura": 1.62,
        "peso": 59,
        "salario": 23876,
        "data_nasc": "1995-12-08",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "705.194.683-84",
        "nome": "Srta. Lorena Machado",
        "telefone": "81 7920-6980",
        "altura": 1.78,
        "peso": 85,
        "salario": 6891,
        "data_nasc": "1992-12-11",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "340.957.812-97",
        "nome": "Bento da Paz",
        "telefone": "21 1046 3681",
        "altura": 1.99,
        "peso": 103,
        "salario": 51516,
        "data_nasc": "1994-12-27",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "237.450.681-90",
        "nome": "Yasmin Borges",
        "telefone": "(071) 7620 5554",
        "altura": 1.66,
        "peso": 70,
        "salario": 31738,
        "data_nasc": "1992-04-16",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "460.921.835-60",
        "nome": "Kamilly Araújo",
        "telefone": "+55 84 1689 3639",
        "altura": 1.64,
        "peso": 80,
        "salario": 12435,
        "data_nasc": "1989-06-14",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "572.196.403-07",
        "nome": "Luana Pereira",
        "telefone": "51 2629 2518",
        "altura": 1.78,
        "peso": 67,
        "salario": 15090,
        "data_nasc": "2002-05-22",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "205.369.741-52",
        "nome": "Srta. Ester Dias",
        "telefone": "+55 (021) 3122-0994",
        "altura": 1.8,
        "peso": 88,
        "salario": 51229,
        "data_nasc": "2004-11-10",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "390.278.164-50",
        "nome": "Isabel Peixoto",
        "telefone": "31 2677 2233",
        "altura": 1.71,
        "peso": 83,
        "salario": 20973,
        "data_nasc": "1985-05-08",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "638.910.572-02",
        "nome": "Alice da Mata",
        "telefone": "(061) 7366 0965",
        "altura": 1.78,
        "peso": 68,
        "salario": 44280,
        "data_nasc": "1997-08-31",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "081.369.725-59",
        "nome": "Zoe Moura",
        "telefone": "+55 (061) 8680 3476",
        "altura": 1.8,
        "peso": 93,
        "salario": 9575,
        "data_nasc": "1994-08-13",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "640.581.329-06",
        "nome": "Ravi Cavalcante",
        "telefone": "+55 31 8129 8266",
        "altura": 1.71,
        "peso": 82,
        "salario": 27274,
        "data_nasc": "1995-04-05",
        "tecnico": "081.679.423-50"
    },
    {
        "CPF": "739.025.146-80",
        "nome": "Amanda Cavalcanti",
        "telefone": "+55 31 1751 8689",
        "altura": 1.97,
        "peso": 97,
        "salario": 5168,
        "data_nasc": "1989-09-11",
        "tecnico": "231.869.570-95"
    },
    {
        "CPF": "259.168.047-76",
        "nome": "Maria Helena Aparecida",
        "telefone": "(041) 7421 2309",
        "altura": 1.71,
        "peso": 67,
        "salario": 43005,
        "data_nasc": "1992-11-12",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "780.431.625-90",
        "nome": "Raul Monteiro",
        "telefone": "(051) 6719-9038",
        "altura": 2.0,
        "peso": 100,
        "salario": 34264,
        "data_nasc": "1993-09-19",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "290.587.143-14",
        "nome": "Giovanna Aragão",
        "telefone": "(071) 1016 2249",
        "altura": 1.82,
        "peso": 78,
        "salario": 54995,
        "data_nasc": "2006-09-28",
        "tecnico": "680.791.543-84"
    },
    {
        "CPF": "950.728.416-85",
        "nome": "Dra. Emanuelly Marques",
        "telefone": "(011) 8147-2145",
        "altura": 1.82,
        "peso": 81,
        "salario": 17363,
        "data_nasc": "2002-03-09",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "301.456.872-44",
        "nome": "Valentina Costela",
        "telefone": "(011) 9548-9952",
        "altura": 1.99,
        "peso": 89,
        "salario": 20306,
        "data_nasc": "2005-02-26",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "792.418.506-20",
        "nome": "Sara Moreira",
        "telefone": "+55 (041) 7139 6605",
        "altura": 1.94,
        "peso": 91,
        "salario": 53804,
        "data_nasc": "1996-02-25",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "348.602.791-31",
        "nome": "Hadassa Albuquerque",
        "telefone": "+55 (011) 1556 9902",
        "altura": 1.79,
        "peso": 93,
        "salario": 30302,
        "data_nasc": "1990-11-09",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "027.153.864-35",
        "nome": "Dr. Rhavi Melo",
        "telefone": "+55 (081) 8495 8803",
        "altura": 2.0,
        "peso": 112,
        "salario": 14968,
        "data_nasc": "2003-11-25",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "512.706.349-25",
        "nome": "Luísa Vieira",
        "telefone": "0500 962 9145",
        "altura": 1.8,
        "peso": 66,
        "salario": 43678,
        "data_nasc": "1985-05-01",
        "tecnico": "493.521.678-64"
    },
    {
        "CPF": "735.821.906-68",
        "nome": "Noah Borges",
        "telefone": "31 0317 8078",
        "altura": 1.73,
        "peso": 63,
        "salario": 33855,
        "data_nasc": "1989-06-30",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "845.109.672-76",
        "nome": "Luigi Mendes",
        "telefone": "(051) 6810-4091",
        "altura": 1.64,
        "peso": 78,
        "salario": 52346,
        "data_nasc": "1995-08-05",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "840.921.573-04",
        "nome": "Ana Clara Caldeira",
        "telefone": "(011) 4857 1422",
        "altura": 1.66,
        "peso": 79,
        "salario": 9903,
        "data_nasc": "1993-07-25",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "891.742.560-76",
        "nome": "Anthony Gabriel Pinto",
        "telefone": "(011) 9321 4958",
        "altura": 1.79,
        "peso": 95,
        "salario": 45845,
        "data_nasc": "1999-05-08",
        "tecnico": "165.387.024-90"
    },
    {
        "CPF": "701.385.694-01",
        "nome": "Davi Lucca Alves",
        "telefone": "0300-979-5453",
        "altura": 1.88,
        "peso": 94,
        "salario": 26532,
        "data_nasc": "2007-01-30",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "721.653.098-59",
        "nome": "Anna Liz Sá",
        "telefone": "(061) 7332-9456",
        "altura": 1.94,
        "peso": 108,
        "salario": 25752,
        "data_nasc": "1990-06-29",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "578.063.912-40",
        "nome": "Dra. Luísa Viana",
        "telefone": "(061) 2459-9281",
        "altura": 1.85,
        "peso": 99,
        "salario": 40456,
        "data_nasc": "1998-01-21",
        "tecnico": "513.268.794-64"
    },
    {
        "CPF": "147.386.920-03",
        "nome": "Srta. Lunna Novais",
        "telefone": "81 2761-5396",
        "altura": 1.61,
        "peso": 54,
        "salario": 49852,
        "data_nasc": "1999-01-25",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "321.564.907-16",
        "nome": "Manuela Nogueira",
        "telefone": "(061) 8172 4619",
        "altura": 1.97,
        "peso": 116,
        "salario": 10923,
        "data_nasc": "1987-12-15",
        "tecnico": "438.105.679-57"
    },
    {
        "CPF": "701.964.832-04",
        "nome": "Maria Helena Duarte",
        "telefone": "(041) 8469-9733",
        "altura": 1.77,
        "peso": 66,
        "salario": 51130,
        "data_nasc": "1995-01-10",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "510.463.897-93",
        "nome": "Kevin Lopes",
        "telefone": "31 8008 5140",
        "altura": 1.95,
        "peso": 93,
        "salario": 24625,
        "data_nasc": "1992-04-04",
        "tecnico": "436.795.218-55"
    },
    {
        "CPF": "568.374.120-35",
        "nome": "Maria Júlia Pires",
        "telefone": "(071) 2386-5624",
        "altura": 1.96,
        "peso": 79,
        "salario": 8677,
        "data_nasc": "2007-01-20",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "102.536.987-40",
        "nome": "Davi Luiz Albuquerque",
        "telefone": "84 7969 2786",
        "altura": 1.72,
        "peso": 70,
        "salario": 21003,
        "data_nasc": "2003-01-14",
        "tecnico": "359.876.401-48"
    },
    {
        "CPF": "326.407.985-29",
        "nome": "Maria Isis Fogaça",
        "telefone": "21 4689-5009",
        "altura": 1.81,
        "peso": 84,
        "salario": 16800,
        "data_nasc": "2000-09-11",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "712.564.980-76",
        "nome": "Sra. Brenda Pacheco",
        "telefone": "41 9137-1894",
        "altura": 1.67,
        "peso": 58,
        "salario": 30070,
        "data_nasc": "2005-02-10",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "078.436.215-71",
        "nome": "Luigi Nascimento",
        "telefone": "(021) 4209 4940",
        "altura": 1.85,
        "peso": 77,
        "salario": 43217,
        "data_nasc": "2005-08-31",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "049.237.168-78",
        "nome": "Eloá Oliveira",
        "telefone": "+55 84 4294-4401",
        "altura": 1.66,
        "peso": 68,
        "salario": 35118,
        "data_nasc": "2004-10-19",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "752.981.306-40",
        "nome": "Dom Ribeiro",
        "telefone": "(081) 1292 7663",
        "altura": 1.7,
        "peso": 58,
        "salario": 35490,
        "data_nasc": "2006-09-25",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "950.827.431-04",
        "nome": "Eloah Costela",
        "telefone": "71 7478 3667",
        "altura": 1.96,
        "peso": 103,
        "salario": 9840,
        "data_nasc": "1993-03-10",
        "tecnico": "710.698.423-03"
    },
    {
        "CPF": "047.352.961-07",
        "nome": "Vinícius Lopes",
        "telefone": "(021) 9454-4149",
        "altura": 1.78,
        "peso": 74,
        "salario": 24605,
        "data_nasc": "1997-07-25",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "935.761.280-77",
        "nome": "Isabella Siqueira",
        "telefone": "+55 (021) 1061 8175",
        "altura": 1.86,
        "peso": 84,
        "salario": 34939,
        "data_nasc": "1991-09-20",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "091.847.623-22",
        "nome": "Sra. Isis Correia",
        "telefone": "+55 31 9269 2124",
        "altura": 1.94,
        "peso": 83,
        "salario": 36667,
        "data_nasc": "1994-04-11",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "746.592.803-65",
        "nome": "Ana Vitória Porto",
        "telefone": "+55 84 0665-0442",
        "altura": 1.64,
        "peso": 64,
        "salario": 42670,
        "data_nasc": "1999-03-31",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "962.530.178-02",
        "nome": "Samuel Costa",
        "telefone": "+55 11 9174-1011",
        "altura": 1.72,
        "peso": 80,
        "salario": 59397,
        "data_nasc": "2003-09-11",
        "tecnico": "438.150.926-98"
    },
    {
        "CPF": "720.953.861-59",
        "nome": "Sra. Melissa Almeida",
        "telefone": "61 9087 7661",
        "altura": 1.86,
        "peso": 79,
        "salario": 49944,
        "data_nasc": "2002-08-19",
        "tecnico": "296.018.347-96"
    },
    {
        "CPF": "715.296.304-52",
        "nome": "Alexandre Gomes",
        "telefone": "21 8517 4328",
        "altura": 1.91,
        "peso": 108,
        "salario": 44741,
        "data_nasc": "1985-08-04",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "615.309.872-02",
        "nome": "Esther da Rosa",
        "telefone": "+55 (071) 0937-6184",
        "altura": 1.9,
        "peso": 102,
        "salario": 23756,
        "data_nasc": "2001-04-03",
        "tecnico": "627.108.395-12"
    },
    {
        "CPF": "059.287.346-38",
        "nome": "Milena Almeida",
        "telefone": "41 7829-3102",
        "altura": 1.91,
        "peso": 81,
        "salario": 28089,
        "data_nasc": "2000-11-20",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "903.561.872-68",
        "nome": "Allana Melo",
        "telefone": "(041) 1792 9111",
        "altura": 1.69,
        "peso": 63,
        "salario": 49417,
        "data_nasc": "2001-03-03",
        "tecnico": "246.187.953-28"
    },
    {
        "CPF": "365.879.204-38",
        "nome": "Hellena Azevedo",
        "telefone": "(061) 3092 5114",
        "altura": 1.9,
        "peso": 100,
        "salario": 59941,
        "data_nasc": "1989-01-22",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "582.314.067-35",
        "nome": "Eloá Sampaio",
        "telefone": "0800-620-7100",
        "altura": 1.65,
        "peso": 57,
        "salario": 47358,
        "data_nasc": "1990-05-11",
        "tecnico": "561.347.209-25"
    },
    {
        "CPF": "723.158.960-02",
        "nome": "João Miguel Leão",
        "telefone": "+55 (051) 9092-7914",
        "altura": 1.62,
        "peso": 73,
        "salario": 42982,
        "data_nasc": "1996-02-02",
        "tecnico": "374.601.982-69"
    },
    {
        "CPF": "391.406.285-15",
        "nome": "Alana Novais",
        "telefone": "(061) 3403-1277",
        "altura": 1.75,
        "peso": 65,
        "salario": 24340,
        "data_nasc": "1990-04-03",
        "tecnico": "310.678.452-08"
    },
    {
        "CPF": "543.729.608-83",
        "nome": "Augusto Aragão",
        "telefone": "+55 (071) 8220 7811",
        "altura": 1.73,
        "peso": 72,
        "salario": 13661,
        "data_nasc": "1992-04-05",
        "tecnico": "845.023.196-51"
    },
    {
        "CPF": "359.602.184-70",
        "nome": "Sra. Lunna Leão",
        "telefone": "81 3631 7970",
        "altura": 1.91,
        "peso": 105,
        "salario": 39789,
        "data_nasc": "1999-01-31",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "726.813.594-73",
        "nome": "Henrique Pimenta",
        "telefone": "+55 81 3520-9042",
        "altura": 1.8,
        "peso": 74,
        "salario": 21840,
        "data_nasc": "1988-01-13",
        "tecnico": "710.698.423-03"
    },
    {
        "CPF": "253.941.860-06",
        "nome": "Natália Leão",
        "telefone": "+55 31 6873 9774",
        "altura": 1.97,
        "peso": 114,
        "salario": 24342,
        "data_nasc": "1984-09-30",
        "tecnico": "439.678.152-00"
    },
    {
        "CPF": "563.418.097-00",
        "nome": "Sra. Isadora da Cruz",
        "telefone": "+55 (061) 7806 8671",
        "altura": 1.9,
        "peso": 84,
        "salario": 35692,
        "data_nasc": "1999-08-25",
        "tecnico": "593.820.164-06"
    },
    {
        "CPF": "806.172.493-69",
        "nome": "Isabella Barros",
        "telefone": "+55 (031) 7427 9907",
        "altura": 1.99,
        "peso": 85,
        "salario": 49323,
        "data_nasc": "2000-01-13",
        "tecnico": "805.397.214-41"
    },
    {
        "CPF": "570.698.321-68",
        "nome": "Nathan Cirino",
        "telefone": "51 0464 9893",
        "altura": 1.89,
        "peso": 106,
        "salario": 57729,
        "data_nasc": "1987-01-04",
        "tecnico": "893.712.650-86"
    },
    {
        "CPF": "085.963.217-21",
        "nome": "Lívia Sousa",
        "telefone": "21 5281 8325",
        "altura": 1.82,
        "peso": 69,
        "salario": 5912,
        "data_nasc": "1992-05-16",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "738.265.910-03",
        "nome": "Bruna Rezende",
        "telefone": "+55 (084) 5577 8817",
        "altura": 1.71,
        "peso": 62,
        "salario": 49094,
        "data_nasc": "2002-05-09",
        "tecnico": "731.840.526-80"
    },
    {
        "CPF": "751.930.468-00",
        "nome": "Yasmin da Rocha",
        "telefone": "(011) 1124 1272",
        "altura": 1.9,
        "peso": 82,
        "salario": 58897,
        "data_nasc": "1991-03-16",
        "tecnico": "479.358.602-38"
    },
    {
        "CPF": "682.379.450-00",
        "nome": "Alícia da Rocha",
        "telefone": "(021) 3103 8569",
        "altura": 1.86,
        "peso": 82,
        "salario": 20323,
        "data_nasc": "1995-12-02",
        "tecnico": "489.532.671-37"
    },
    {
        "CPF": "987.324.160-40",
        "nome": "Lunna Mendonça",
        "telefone": "+55 71 3754-0254",
        "altura": 1.79,
        "peso": 84,
        "salario": 26496,
        "data_nasc": "1999-10-08",
        "tecnico": "680.791.543-84"
    }
];

// Insere os atletas e verifica a validade
if (atletas.length > 0) {
    db.Atletas.insertMany(atletas);
    print("Atletas inseridos com sucesso!");
} else {
    print("Algo de errado aconteceu com Atletas");
}

/* Inserindo múltiplos Técnicos */
let tecnicos = [
    {
        "CPF": "438.150.926-98",
        "nome": "Brenda Alves",
        "telefone": "+55 (051) 0133 8908",
        "salario": 37379.93794602593,
        "data_nasc": "1972-10-13",
        "atletas": [
            "746.019.852-85",
            "958.130.762-12",
            "196.345.087-66",
            "734.581.062-35",
            "180.564.723-71",
            "621.734.085-26",
            "857.910.364-93",
            "845.109.672-76",
            "962.530.178-02"
        ]
    },
    {
        "CPF": "374.601.982-69",
        "nome": "Dra. Ísis Leão",
        "telefone": "+55 (021) 3511-6155",
        "salario": 15875.376432793342,
        "data_nasc": "1977-04-02",
        "atletas": [
            "319.576.824-00",
            "278.914.365-09",
            "849.316.250-70",
            "039.861.472-50",
            "648.075.123-07",
            "521.387.960-86",
            "376.245.019-61",
            "458.793.601-48",
            "574.689.102-94",
            "723.158.960-02"
        ]
    },
    {
        "CPF": "169.428.530-89",
        "nome": "Raul Nascimento",
        "telefone": "+55 (084) 0341 3164",
        "salario": 24626.026142919174,
        "data_nasc": "1990-02-08",
        "atletas": [
            "895.374.216-19",
            "378.465.192-55",
            "728.946.135-55",
            "652.709.814-67",
            "962.415.803-70",
            "034.725.816-62",
            "716.305.298-77",
            "254.370.619-43",
            "371.950.268-68"
        ]
    },
    {
        "CPF": "593.820.164-06",
        "nome": "Maria Clara Castro",
        "telefone": "+55 (031) 7648-3503",
        "salario": 22812.375835208797,
        "data_nasc": "1961-06-08",
        "atletas": [
            "083.519.462-06",
            "308.576.942-00",
            "458.370.962-56",
            "562.849.037-74",
            "984.570.123-04",
            "178.254.309-05",
            "705.194.683-84",
            "563.418.097-00"
        ]
    },
    {
        "CPF": "359.876.401-48",
        "nome": "Dr. João Felipe Azevedo",
        "telefone": "+55 84 3884 9696",
        "salario": 40776.49249574043,
        "data_nasc": "1983-11-20",
        "atletas": [
            "269.037.451-06",
            "509.217.648-20",
            "401.597.836-66",
            "064.891.537-93",
            "854.639.701-57",
            "157.029.486-02",
            "392.150.648-42",
            "853.164.279-55",
            "572.301.486-26",
            "780.431.625-90",
            "840.921.573-04",
            "102.536.987-40"
        ]
    },
    {
        "CPF": "710.698.423-03",
        "nome": "Davi Miguel Moraes",
        "telefone": "0300-166-9784",
        "salario": 38684.4820598019,
        "data_nasc": "1960-01-13",
        "atletas": [
            "584.290.371-79",
            "914.063.825-15",
            "650.137.489-84",
            "950.827.431-04",
            "726.813.594-73"
        ]
    },
    {
        "CPF": "845.023.196-51",
        "nome": "Bruna Rodrigues",
        "telefone": "+55 71 8281-4893",
        "salario": 46226.28486966959,
        "data_nasc": "1969-08-26",
        "atletas": [
            "680.372.415-80",
            "735.948.612-28",
            "571.486.293-73",
            "182.795.630-59",
            "684.105.293-51",
            "167.304.295-34",
            "567.309.241-52",
            "628.459.701-02",
            "638.910.572-02",
            "543.729.608-83"
        ]
    },
    {
        "CPF": "805.397.214-41",
        "nome": "Sr. Vitor Hugo Vasconcelos",
        "telefone": "+55 (081) 3911 7182",
        "salario": 18042.859142029563,
        "data_nasc": "1967-12-28",
        "atletas": [
            "895.703.241-04",
            "425.091.873-41",
            "324.907.851-41",
            "075.316.842-17",
            "896.074.231-78",
            "537.218.694-19",
            "804.219.357-23",
            "947.386.152-46",
            "869.175.302-12",
            "340.957.812-97",
            "806.172.493-69"
        ]
    },
    {
        "CPF": "246.187.953-28",
        "nome": "Olívia Novaes",
        "telefone": "(031) 8713-3150",
        "salario": 29767.263688984465,
        "data_nasc": "1974-11-29",
        "atletas": [
            "936.041.587-10",
            "257.081.364-80",
            "873.612.590-30",
            "689.402.537-10",
            "256.317.804-53",
            "829.371.465-46",
            "293.485.061-70",
            "561.289.703-03",
            "206.748.193-22",
            "824.031.956-42",
            "501.867.239-03",
            "827.164.593-55",
            "413.870.956-84",
            "120.398.654-89",
            "049.237.168-78",
            "935.761.280-77",
            "903.561.872-68"
        ]
    },
    {
        "CPF": "103.862.547-53",
        "nome": "Hellena Abreu",
        "telefone": "+55 84 7382-9973",
        "salario": 16042.902680332461,
        "data_nasc": "1991-06-09",
        "atletas": [
            "738.246.195-55",
            "956.843.102-06",
            "845.362.097-00",
            "927.680.431-50",
            "291.460.738-50"
        ]
    },
    {
        "CPF": "165.387.024-90",
        "nome": "Esther Brito",
        "telefone": "+55 (081) 6513 3387",
        "salario": 22652.329118126116,
        "data_nasc": "1968-10-16",
        "atletas": [
            "897.304.512-14",
            "516.024.789-02",
            "164.850.397-75",
            "679.304.128-22",
            "807.513.249-14",
            "015.384.796-48",
            "921.038.765-12",
            "950.728.416-85",
            "792.418.506-20",
            "891.742.560-76"
        ]
    },
    {
        "CPF": "731.840.526-80",
        "nome": "Emilly da Mota",
        "telefone": "+55 31 3267 7360",
        "salario": 32687.43508361768,
        "data_nasc": "1970-06-16",
        "atletas": [
            "047.362.195-99",
            "768.502.314-80",
            "478.193.205-32",
            "594.762.038-38",
            "298.034.751-50",
            "746.592.803-65",
            "359.602.184-70",
            "738.265.910-03"
        ]
    },
    {
        "CPF": "479.358.602-38",
        "nome": "Agatha Gomes",
        "telefone": "(021) 3098 0500",
        "salario": 15928.758938935227,
        "data_nasc": "1991-09-12",
        "atletas": [
            "986.021.573-12",
            "154.029.678-49",
            "738.109.546-75",
            "743.628.095-38",
            "398.621.405-42",
            "572.394.081-32",
            "301.456.872-44",
            "348.602.791-31",
            "721.653.098-59",
            "091.847.623-22",
            "085.963.217-21",
            "751.930.468-00"
        ]
    },
    {
        "CPF": "081.679.423-50",
        "nome": "Vitória Castro",
        "telefone": "71 1939 9091",
        "salario": 21959.317774032697,
        "data_nasc": "1987-10-12",
        "atletas": [
            "403.798.561-66",
            "189.207.645-49",
            "065.279.841-11",
            "183.027.645-07",
            "806.932.417-13",
            "493.067.852-83",
            "245.706.391-43",
            "120.983.765-02",
            "640.581.329-06"
        ]
    },
    {
        "CPF": "435.128.679-28",
        "nome": "Stephany Dias",
        "telefone": "(051) 5107-9911",
        "salario": 37745.95532228331,
        "data_nasc": "1973-10-03",
        "atletas": [
            "748.012.536-44",
            "712.359.486-09",
            "835.271.406-62",
            "253.018.476-35",
            "154.983.670-66",
            "520.938.416-06",
            "983.102.765-59"
        ]
    },
    {
        "CPF": "513.268.794-64",
        "nome": "Julia Cardoso",
        "telefone": "0800-808-4124",
        "salario": 34072.95182111258,
        "data_nasc": "1967-02-08",
        "atletas": [
            "158.024.936-15",
            "926.175.483-09",
            "628.904.351-05",
            "653.087.219-12",
            "043.289.576-00",
            "471.859.063-93",
            "913.720.658-30",
            "390.278.164-50",
            "578.063.912-40"
        ]
    },
    {
        "CPF": "493.521.678-64",
        "nome": "Yuri Cassiano",
        "telefone": "+55 61 0164-0052",
        "salario": 22715.421771424386,
        "data_nasc": "1977-01-28",
        "atletas": [
            "176.208.934-31",
            "251.973.086-21",
            "863.172.950-77",
            "412.708.653-07",
            "832.479.015-23",
            "629.154.780-58",
            "802.917.543-41",
            "251.340.678-80",
            "205.369.741-52",
            "512.706.349-25"
        ]
    },
    {
        "CPF": "680.791.543-84",
        "nome": "Pedro Miguel Novaes",
        "telefone": "(021) 2045-0533",
        "salario": 35624.29893565681,
        "data_nasc": "1966-03-31",
        "atletas": [
            "241.809.375-14",
            "519.037.682-68",
            "341.765.092-52",
            "654.902.731-43",
            "751.349.028-79",
            "201.935.467-52",
            "509.286.314-51",
            "189.245.360-60",
            "237.450.681-90",
            "290.587.143-14",
            "987.324.160-40"
        ]
    },
    {
        "CPF": "296.018.347-96",
        "nome": "Dr. Eduardo da Costa",
        "telefone": "+55 81 2160-7337",
        "salario": 43330.06598372394,
        "data_nasc": "1983-01-17",
        "atletas": [
            "841.703.269-03",
            "708.529.364-00",
            "973.562.140-16",
            "639.478.152-55",
            "053.891.642-70",
            "597.423.186-46",
            "290.173.658-03",
            "259.168.047-76",
            "047.352.961-07",
            "720.953.861-59"
        ]
    },
    {
        "CPF": "036.279.518-59",
        "nome": "Ian Câmara",
        "telefone": "61 5014-2940",
        "salario": 15227.456588732135,
        "data_nasc": "1966-08-18",
        "atletas": [
            "946.523.701-99",
            "842.056.193-24",
            "219.745.683-00",
            "652.170.983-68",
            "218.409.673-31",
            "869.710.352-59",
            "804.129.356-51",
            "271.543.960-16",
            "346.705.192-80",
            "891.236.750-12"
        ]
    },
    {
        "CPF": "561.347.209-25",
        "nome": "Maya Ferreira",
        "telefone": "+55 (011) 8835 6159",
        "salario": 43203.67381414828,
        "data_nasc": "1980-08-12",
        "atletas": [
            "703.241.659-43",
            "530.978.261-30",
            "698.370.425-83",
            "846.709.531-84",
            "810.359.246-33",
            "475.213.908-14",
            "976.458.213-37",
            "935.704.861-84",
            "027.153.864-35",
            "147.386.920-03",
            "701.964.832-04",
            "582.314.067-35"
        ]
    },
    {
        "CPF": "489.532.671-37",
        "nome": "Camila Silveira",
        "telefone": "81 2366-2994",
        "salario": 39434.87882458794,
        "data_nasc": "1986-11-20",
        "atletas": [
            "316.475.829-46",
            "298.043.156-70",
            "975.036.182-21",
            "530.276.194-70",
            "943.506.281-42",
            "604.951.782-76",
            "613.754.029-43",
            "149.067.352-07",
            "674.935.820-92",
            "072.891.435-23",
            "386.174.520-80",
            "365.879.204-38",
            "682.379.450-00"
        ]
    },
    {
        "CPF": "436.795.218-55",
        "nome": "Agatha da Rosa",
        "telefone": "(031) 3872-1489",
        "salario": 26908.768078129717,
        "data_nasc": "1982-01-23",
        "atletas": [
            "385.096.741-75",
            "695.038.147-66",
            "410.893.267-69",
            "861.934.705-57",
            "417.602.389-96",
            "814.952.630-70",
            "942.867.510-58",
            "852.463.719-64",
            "510.463.897-93"
        ]
    },
    {
        "CPF": "438.105.679-57",
        "nome": "Isaac Rocha",
        "telefone": "(051) 6936-7632",
        "salario": 20441.782493412356,
        "data_nasc": "1959-08-18",
        "atletas": [
            "829.154.730-05",
            "163.802.795-12",
            "192.768.304-13",
            "145.803.967-66",
            "072.415.386-17",
            "847.512.306-62",
            "326.791.804-96",
            "321.564.907-16"
        ]
    },
    {
        "CPF": "287.041.653-90",
        "nome": "Otávio Câmara",
        "telefone": "(061) 8895-7986",
        "salario": 48502.45752723734,
        "data_nasc": "1989-08-06",
        "atletas": [
            "612.590.473-34",
            "625.198.470-85",
            "038.947.615-39",
            "739.208.564-65",
            "805.639.127-40",
            "321.647.985-46",
            "639.278.450-00"
        ]
    },
    {
        "CPF": "439.678.152-00",
        "nome": "Renan Machado",
        "telefone": "+55 11 4345 5812",
        "salario": 26780.809078941937,
        "data_nasc": "1969-07-07",
        "atletas": [
            "786.934.051-01",
            "062.851.973-77",
            "503.417.896-66",
            "126.345.708-80",
            "104.985.326-15",
            "785.034.196-10",
            "185.693.274-55",
            "137.985.204-88",
            "143.567.290-99",
            "814.502.639-33",
            "438.769.015-10",
            "394.851.720-79",
            "568.374.120-35",
            "326.407.985-29",
            "752.981.306-40",
            "059.287.346-38",
            "253.941.860-06"
        ]
    },
    {
        "CPF": "231.869.570-95",
        "nome": "Matheus Sales",
        "telefone": "+55 (084) 6690-9670",
        "salario": 18246.104518305176,
        "data_nasc": "1983-03-11",
        "atletas": [
            "284.905.631-60",
            "596.041.873-84",
            "893.726.450-10",
            "029.138.476-50",
            "170.654.893-10",
            "796.058.234-38",
            "572.196.403-07",
            "739.025.146-80"
        ]
    },
    {
        "CPF": "893.712.650-86",
        "nome": "Mathias Leão",
        "telefone": "51 5627 2980",
        "salario": 18385.073189171242,
        "data_nasc": "1986-01-24",
        "atletas": [
            "314.986.750-93",
            "169.850.347-48",
            "097.621.583-77",
            "308.621.457-08",
            "016.248.935-89",
            "278.396.041-96",
            "801.372.456-53",
            "183.469.702-69",
            "351.690.472-07",
            "253.968.471-82",
            "604.782.135-90",
            "081.369.725-59",
            "735.821.906-68",
            "701.385.694-01",
            "712.564.980-76",
            "570.698.321-68"
        ]
    },
    {
        "CPF": "627.108.395-12",
        "nome": "Amanda Barros",
        "telefone": "(051) 5564-6417",
        "salario": 44662.30282216109,
        "data_nasc": "1960-07-27",
        "atletas": [
            "639.028.417-96",
            "562.184.739-37",
            "738.914.256-19",
            "546.023.897-83",
            "387.290.561-95",
            "495.632.817-64",
            "530.627.891-40",
            "615.309.872-02"
        ]
    },
    {
        "CPF": "310.678.452-08",
        "nome": "Dra. Ana Júlia Ferreira",
        "telefone": "+55 41 2719-3745",
        "salario": 36130.41109784119,
        "data_nasc": "1970-09-02",
        "atletas": [
            "728.053.614-07",
            "217.639.045-80",
            "769.310.485-20",
            "079.251.643-52",
            "241.903.586-06",
            "428.970.516-20",
            "460.921.835-60",
            "078.436.215-71",
            "715.296.304-52",
            "391.406.285-15"
        ]
    }
];

// Insere os técnicos e verifica a validade
if (tecnicos.length > 0) {
    db.Tecnicos.insertMany(tecnicos);
    print("Técnicos inseridos com sucesso!");
} else {
    print("Algo de errado aconteceu com Técnicos");
}


/* Inserindo múltiplos Jogos */
let jogos = [
    {
        "codigo_jogo": "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
        "tempo_duracao": 90,
        "atletas": [
            "154.029.678-49",
            "158.024.936-15",
            "237.450.681-90",
            "170.654.893-10",
            "458.793.601-48",
            "182.795.630-59",
            "083.519.462-06",
            "516.024.789-02",
            "298.043.156-70",
            "521.387.960-86",
            "348.602.791-31",
            "324.907.851-41",
            "029.138.476-50",
            "935.761.280-77",
            "738.246.195-55",
            "984.570.123-04",
            "251.340.678-80",
            "639.278.450-00",
            "091.847.623-22",
            "254.370.619-43"
        ],
        "data": "2021-05-31T20:55:46"
    },
    {
        "codigo_jogo": "666c475d-71e9-410c-9f92-7241b7a20caf",
        "tempo_duracao": 90,
        "atletas": [
            "394.851.720-79",
            "065.279.841-11",
            "301.456.872-44",
            "120.983.765-02",
            "739.208.564-65",
            "639.028.417-96",
            "639.278.450-00",
            "845.362.097-00",
            "852.463.719-64",
            "029.138.476-50",
            "471.859.063-93",
            "567.309.241-52",
            "962.530.178-02",
            "814.502.639-33",
            "895.703.241-04",
            "398.621.405-42",
            "417.602.389-96",
            "154.983.670-66",
            "251.973.086-21",
            "251.340.678-80"
        ],
        "data": "2021-05-14T13:21:45"
    },
    {
        "codigo_jogo": "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
        "tempo_duracao": 120,
        "atletas": [
            "145.803.967-66",
            "897.304.512-14",
            "176.208.934-31",
            "298.034.751-50",
            "738.109.546-75",
            "801.372.456-53",
            "359.602.184-70",
            "412.708.653-07",
            "403.798.561-66",
            "903.561.872-68",
            "829.371.465-46",
            "604.951.782-76",
            "832.479.015-23",
            "594.762.038-38",
            "530.978.261-30",
            "519.037.682-68",
            "417.602.389-96",
            "695.038.147-66",
            "728.946.135-55",
            "091.847.623-22"
        ],
        "data": "2024-07-21T04:06:19"
    },
    {
        "codigo_jogo": "59464500-93ec-4f33-b290-42a4de096445",
        "tempo_duracao": 90,
        "atletas": [
            "896.074.231-78",
            "734.581.062-35",
            "703.241.659-43",
            "164.850.397-75",
            "316.475.829-46",
            "814.502.639-33",
            "785.034.196-10",
            "562.849.037-74",
            "341.765.092-52",
            "561.289.703-03",
            "308.621.457-08",
            "801.372.456-53",
            "326.791.804-96",
            "712.564.980-76",
            "786.934.051-01",
            "158.024.936-15",
            "081.369.725-59",
            "921.038.765-12",
            "471.859.063-93",
            "147.386.920-03"
        ],
        "data": "2022-06-05T05:31:37"
    },
    {
        "codigo_jogo": "694bd5de-ac12-4422-8546-0e3a26b4f526",
        "tempo_duracao": 90,
        "atletas": [
            "604.782.135-90",
            "840.921.573-04",
            "154.029.678-49",
            "562.184.739-37",
            "568.374.120-35",
            "170.654.893-10",
            "572.301.486-26",
            "654.902.731-43",
            "895.703.241-04",
            "739.025.146-80",
            "271.543.960-16",
            "346.705.192-80",
            "571.486.293-73",
            "792.418.506-20",
            "852.463.719-64",
            "975.036.182-21",
            "378.465.192-55",
            "716.305.298-77",
            "530.978.261-30",
            "612.590.473-34"
        ],
        "data": "2021-07-20T07:49:10"
    },
    {
        "codigo_jogo": "b1b28a83-dd96-4386-a9c0-42702bb19428",
        "tempo_duracao": 90,
        "atletas": [
            "493.067.852-83",
            "987.324.160-40",
            "715.296.304-52",
            "869.710.352-59",
            "810.359.246-33",
            "049.237.168-78",
            "034.725.816-62",
            "251.340.678-80",
            "891.742.560-76",
            "072.891.435-23",
            "065.279.841-11",
            "786.934.051-01",
            "059.287.346-38",
            "604.951.782-76",
            "604.782.135-90",
            "652.170.983-68",
            "413.870.956-84",
            "805.639.127-40",
            "597.423.186-46",
            "394.851.720-79"
        ],
        "data": "2021-06-28T19:44:25"
    },
    {
        "codigo_jogo": "1937ce0d-68b8-4df6-be79-15a4388a1747",
        "tempo_duracao": 120,
        "atletas": [
            "914.063.825-15",
            "346.705.192-80",
            "625.198.470-85",
            "802.917.543-41",
            "064.891.537-93",
            "638.910.572-02",
            "201.935.467-52",
            "189.207.645-49",
            "509.217.648-20",
            "530.276.194-70",
            "857.910.364-93",
            "324.907.851-41",
            "913.720.658-30",
            "728.946.135-55",
            "365.879.204-38",
            "768.502.314-80",
            "391.406.285-15",
            "594.762.038-38",
            "251.973.086-21",
            "253.968.471-82"
        ],
        "data": "2021-04-21T20:39:22"
    },
    {
        "codigo_jogo": "b0f57921-05d1-4854-b825-333a1adcecf9",
        "tempo_duracao": 120,
        "atletas": [
            "178.254.309-05",
            "308.621.457-08",
            "137.985.204-88",
            "167.304.295-34",
            "180.564.723-71",
            "284.905.631-60",
            "085.963.217-21",
            "701.385.694-01",
            "145.803.967-66",
            "679.304.128-22",
            "259.168.047-76",
            "708.529.364-00",
            "571.486.293-73",
            "501.867.239-03",
            "365.879.204-38",
            "567.309.241-52",
            "786.934.051-01",
            "743.628.095-38",
            "806.172.493-69",
            "291.460.738-50"
        ],
        "data": "2021-05-16T00:01:22"
    },
    {
        "codigo_jogo": "03cb7280-3532-4515-9549-eecdc2ca276a",
        "tempo_duracao": 120,
        "atletas": [
            "391.406.285-15",
            "582.314.067-35",
            "703.241.659-43",
            "206.748.193-22",
            "712.359.486-09",
            "503.417.896-66",
            "189.245.360-60",
            "392.150.648-42",
            "805.639.127-40",
            "501.867.239-03",
            "319.576.824-00",
            "478.193.205-32",
            "359.602.184-70",
            "271.543.960-16",
            "403.798.561-66",
            "401.597.836-66",
            "654.902.731-43",
            "189.207.645-49",
            "049.237.168-78",
            "604.951.782-76"
        ],
        "data": "2022-01-09T03:30:25"
    },
    {
        "codigo_jogo": "2d189a58-a94d-416f-babe-40351b02ace3",
        "tempo_duracao": 90,
        "atletas": [
            "254.370.619-43",
            "251.340.678-80",
            "973.562.140-16",
            "863.172.950-77",
            "639.278.450-00",
            "167.304.295-34",
            "869.710.352-59",
            "726.813.594-73",
            "509.217.648-20",
            "308.621.457-08",
            "679.304.128-22",
            "176.208.934-31",
            "378.465.192-55",
            "189.245.360-60",
            "386.174.520-80",
            "120.398.654-89",
            "290.587.143-14",
            "394.851.720-79",
            "604.951.782-76",
            "147.386.920-03"
        ],
        "data": "2020-12-29T05:59:18"
    },
    {
        "codigo_jogo": "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
        "tempo_duracao": 90,
        "atletas": [
            "321.647.985-46",
            "072.891.435-23",
            "734.581.062-35",
            "218.409.673-31",
            "950.728.416-85",
            "712.564.980-76",
            "684.105.293-51",
            "516.024.789-02",
            "927.680.431-50",
            "804.129.356-51",
            "751.349.028-79",
            "319.576.824-00",
            "192.768.304-13",
            "170.654.893-10",
            "145.803.967-66",
            "652.709.814-67",
            "625.198.470-85",
            "079.251.643-52",
            "143.567.290-99",
            "849.316.250-70"
        ],
        "data": "2020-05-07T20:28:28"
    },
    {
        "codigo_jogo": "301a737e-6b8e-4779-aaca-c8f3c814b44d",
        "tempo_duracao": 120,
        "atletas": [
            "512.706.349-25",
            "072.891.435-23",
            "896.074.231-78",
            "728.946.135-55",
            "376.245.019-61",
            "752.981.306-40",
            "613.754.029-43",
            "845.109.672-76",
            "723.158.960-02",
            "072.415.386-17",
            "385.096.741-75",
            "398.621.405-42",
            "097.621.583-77",
            "935.704.861-84",
            "936.041.587-10",
            "705.194.683-84",
            "958.130.762-12",
            "914.063.825-15",
            "570.698.321-68",
            "891.236.750-12"
        ],
        "data": "2022-09-10T17:20:01"
    },
    {
        "codigo_jogo": "7d00a1e5-66c1-49c1-aa52-259fd894393c",
        "tempo_duracao": 120,
        "atletas": [
            "976.458.213-37",
            "079.251.643-52",
            "786.934.051-01",
            "869.175.302-12",
            "897.304.512-14",
            "869.710.352-59",
            "854.639.701-57",
            "705.194.683-84",
            "471.859.063-93",
            "735.948.612-28",
            "935.704.861-84",
            "016.248.935-89",
            "738.109.546-75",
            "271.543.960-16",
            "326.407.985-29",
            "196.345.087-66",
            "804.129.356-51",
            "392.150.648-42",
            "805.639.127-40",
            "154.029.678-49"
        ],
        "data": "2024-11-19T23:42:06"
    },
    {
        "codigo_jogo": "b99da215-54fb-41f1-bb06-e9d50cf121ad",
        "tempo_duracao": 120,
        "atletas": [
            "596.041.873-84",
            "958.130.762-12",
            "578.063.912-40",
            "786.934.051-01",
            "049.237.168-78",
            "807.513.249-14",
            "043.289.576-00",
            "501.867.239-03",
            "530.978.261-30",
            "029.138.476-50",
            "509.286.314-51",
            "695.038.147-66",
            "629.154.780-58",
            "893.726.450-10",
            "062.851.973-77",
            "064.891.537-93",
            "835.271.406-62",
            "546.023.897-83",
            "348.602.791-31",
            "237.450.681-90"
        ],
        "data": "2021-01-27T22:32:55"
    },
    {
        "codigo_jogo": "a4829aa4-7123-481b-aeb1-c6b167c63f54",
        "tempo_duracao": 120,
        "atletas": [
            "359.602.184-70",
            "562.849.037-74",
            "308.576.942-00",
            "257.081.364-80",
            "371.950.268-68",
            "201.935.467-52",
            "205.369.741-52",
            "386.174.520-80",
            "521.387.960-86",
            "493.067.852-83",
            "751.349.028-79",
            "180.564.723-71",
            "701.385.694-01",
            "975.036.182-21",
            "392.150.648-42",
            "340.957.812-97",
            "604.782.135-90",
            "298.043.156-70",
            "219.745.683-00",
            "567.309.241-52"
        ],
        "data": "2023-10-01T19:02:23"
    },
    {
        "codigo_jogo": "2fce7856-417f-4484-b736-576f6c9c02a4",
        "tempo_duracao": 90,
        "atletas": [
            "958.130.762-12",
            "189.207.645-49",
            "701.385.694-01",
            "639.478.152-55",
            "340.957.812-97",
            "751.930.468-00",
            "903.561.872-68",
            "097.621.583-77",
            "572.394.081-32",
            "563.418.097-00",
            "183.469.702-69",
            "716.305.298-77",
            "081.369.725-59",
            "845.109.672-76",
            "257.081.364-80",
            "895.703.241-04",
            "509.286.314-51",
            "428.970.516-20",
            "509.217.648-20",
            "891.742.560-76"
        ],
        "data": "2022-03-20T01:22:04"
    },
    {
        "codigo_jogo": "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
        "tempo_duracao": 120,
        "atletas": [
            "946.523.701-99",
            "495.632.817-64",
            "290.173.658-03",
            "326.407.985-29",
            "102.536.987-40",
            "039.861.472-50",
            "847.512.306-62",
            "913.720.658-30",
            "245.706.391-43",
            "984.570.123-04",
            "458.793.601-48",
            "805.639.127-40",
            "308.621.457-08",
            "853.164.279-55",
            "612.590.473-34",
            "594.762.038-38",
            "986.021.573-12",
            "582.314.067-35",
            "650.137.489-84",
            "218.409.673-31"
        ],
        "data": "2023-02-22T12:45:10"
    },
    {
        "codigo_jogo": "9149f6ee-b884-4ff0-946e-787302108c58",
        "tempo_duracao": 120,
        "atletas": [
            "956.843.102-06",
            "298.034.751-50",
            "378.465.192-55",
            "682.379.450-00",
            "401.597.836-66",
            "501.867.239-03",
            "392.150.648-42",
            "438.769.015-10",
            "728.946.135-55",
            "509.217.648-20",
            "723.158.960-02",
            "628.459.701-02",
            "594.762.038-38",
            "841.703.269-03",
            "712.564.980-76",
            "530.276.194-70",
            "178.254.309-05",
            "721.653.098-59",
            "471.859.063-93",
            "936.041.587-10"
        ],
        "data": "2021-07-27T05:03:45"
    },
    {
        "codigo_jogo": "59728a78-80d5-40a0-8f8d-7519586de4dd",
        "tempo_duracao": 90,
        "atletas": [
            "392.150.648-42",
            "503.417.896-66",
            "962.415.803-70",
            "973.562.140-16",
            "290.587.143-14",
            "537.218.694-19",
            "291.460.738-50",
            "652.709.814-67",
            "679.304.128-22",
            "958.130.762-12",
            "584.290.371-79",
            "728.053.614-07",
            "701.385.694-01",
            "091.847.623-22",
            "712.564.980-76",
            "298.043.156-70",
            "846.709.531-84",
            "164.850.397-75",
            "628.459.701-02",
            "064.891.537-93"
        ],
        "data": "2021-09-29T09:29:32"
    },
    {
        "codigo_jogo": "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
        "tempo_duracao": 120,
        "atletas": [
            "503.417.896-66",
            "183.027.645-07",
            "290.173.658-03",
            "562.184.739-37",
            "253.968.471-82",
            "847.512.306-62",
            "785.034.196-10",
            "852.463.719-64",
            "218.409.673-31",
            "921.038.765-12",
            "832.479.015-23",
            "950.827.431-04",
            "628.904.351-05",
            "392.150.648-42",
            "205.369.741-52",
            "807.513.249-14",
            "567.309.241-52",
            "563.418.097-00",
            "371.950.268-68",
            "340.957.812-97"
        ],
        "data": "2024-10-13T14:05:19"
    },
    {
        "codigo_jogo": "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
        "tempo_duracao": 90,
        "atletas": [
            "810.359.246-33",
            "840.921.573-04",
            "078.436.215-71",
            "254.370.619-43",
            "648.075.123-07",
            "387.290.561-95",
            "652.709.814-67",
            "804.219.357-23",
            "308.621.457-08",
            "259.168.047-76",
            "913.720.658-30",
            "903.561.872-68",
            "509.286.314-51",
            "701.964.832-04",
            "278.396.041-96",
            "218.409.673-31",
            "425.091.873-41",
            "189.245.360-60",
            "572.394.081-32",
            "147.386.920-03"
        ],
        "data": "2020-04-17T18:36:20"
    },
    {
        "codigo_jogo": "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
        "tempo_duracao": 90,
        "atletas": [
            "935.704.861-84",
            "189.207.645-49",
            "154.029.678-49",
            "572.394.081-32",
            "043.289.576-00",
            "703.241.659-43",
            "394.851.720-79",
            "842.056.193-24",
            "804.129.356-51",
            "840.921.573-04",
            "802.917.543-41",
            "029.138.476-50",
            "650.137.489-84",
            "378.465.192-55",
            "708.529.364-00",
            "712.359.486-09",
            "674.935.820-92",
            "065.279.841-11",
            "853.164.279-55",
            "695.038.147-66"
        ],
        "data": "2022-09-11T17:02:23"
    },
    {
        "codigo_jogo": "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
        "tempo_duracao": 90,
        "atletas": [
            "298.043.156-70",
            "653.087.219-12",
            "390.278.164-50",
            "083.519.462-06",
            "205.369.741-52",
            "921.038.765-12",
            "314.986.750-93",
            "196.345.087-66",
            "936.041.587-10",
            "629.154.780-58",
            "604.951.782-76",
            "956.843.102-06",
            "715.296.304-52",
            "078.436.215-71",
            "178.254.309-05",
            "734.581.062-35",
            "137.985.204-88",
            "785.034.196-10",
            "170.654.893-10",
            "251.973.086-21"
        ],
        "data": "2022-12-04T07:05:30"
    },
    {
        "codigo_jogo": "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
        "tempo_duracao": 120,
        "atletas": [
            "628.904.351-05",
            "254.370.619-43",
            "572.301.486-26",
            "158.024.936-15",
            "734.581.062-35",
            "735.821.906-68",
            "047.352.961-07",
            "341.765.092-52",
            "321.564.907-16",
            "570.698.321-68",
            "806.932.417-13",
            "478.193.205-32",
            "241.903.586-06",
            "891.236.750-12",
            "241.809.375-14",
            "180.564.723-71",
            "563.418.097-00",
            "976.458.213-37",
            "126.345.708-80",
            "509.217.648-20"
        ],
        "data": "2021-04-04T15:31:12"
    },
    {
        "codigo_jogo": "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
        "tempo_duracao": 90,
        "atletas": [
            "201.935.467-52",
            "712.564.980-76",
            "962.530.178-02",
            "701.385.694-01",
            "903.561.872-68",
            "897.304.512-14",
            "053.891.642-70",
            "205.369.741-52",
            "562.184.739-37",
            "984.570.123-04",
            "802.917.543-41",
            "149.067.352-07",
            "341.765.092-52",
            "814.952.630-70",
            "321.647.985-46",
            "806.932.417-13",
            "284.905.631-60",
            "751.930.468-00",
            "298.034.751-50",
            "075.316.842-17"
        ],
        "data": "2023-03-04T14:33:11"
    },
    {
        "codigo_jogo": "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
        "tempo_duracao": 120,
        "atletas": [
            "180.564.723-71",
            "720.953.861-59",
            "805.639.127-40",
            "896.074.231-78",
            "237.450.681-90",
            "739.025.146-80",
            "163.802.795-12",
            "738.246.195-55",
            "158.024.936-15",
            "572.301.486-26",
            "169.850.347-48",
            "034.725.816-62",
            "256.317.804-53",
            "562.184.739-37",
            "387.290.561-95",
            "097.621.583-77",
            "308.576.942-00",
            "392.150.648-42",
            "321.564.907-16",
            "398.621.405-42"
        ],
        "data": "2023-10-25T05:17:48"
    },
    {
        "codigo_jogo": "c0d1b978-7555-4bc5-8abc-11bc3c58b60e",
        "tempo_duracao": 120,
        "atletas": [
            "149.067.352-07",
            "169.850.347-48",
            "154.983.670-66",
            "653.087.219-12",
            "814.952.630-70",
            "746.019.852-85",
            "351.690.472-07",
            "189.245.360-60",
            "278.396.041-96",
            "567.309.241-52",
            "935.704.861-84",
            "597.423.186-46",
            "371.950.268-68",
            "650.137.489-84",
            "805.639.127-40",
            "126.345.708-80",
            "512.706.349-25",
            "510.463.897-93",
            "206.748.193-22",
            "425.091.873-41"
        ],
        "data": "2024-08-04T07:22:14"
    },
    {
        "codigo_jogo": "5f1aff1b-0c63-4209-88ee-577648f024ad",
        "tempo_duracao": 90,
        "atletas": [
            "196.345.087-66",
            "072.891.435-23",
            "503.417.896-66",
            "720.953.861-59",
            "034.725.816-62",
            "716.305.298-77",
            "509.286.314-51",
            "143.567.290-99",
            "584.290.371-79",
            "698.370.425-83",
            "796.058.234-38",
            "346.705.192-80",
            "738.914.256-19",
            "852.463.719-64",
            "501.867.239-03",
            "097.621.583-77",
            "180.564.723-71",
            "574.689.102-94",
            "493.067.852-83",
            "219.745.683-00"
        ],
        "data": "2021-05-20T04:09:23"
    },
    {
        "codigo_jogo": "fb600c35-f2a0-414a-b7cf-74bb15730be7",
        "tempo_duracao": 120,
        "atletas": [
            "869.175.302-12",
            "847.512.306-62",
            "147.386.920-03",
            "039.861.472-50",
            "654.902.731-43",
            "478.193.205-32",
            "290.173.658-03",
            "269.037.451-06",
            "801.372.456-53",
            "201.935.467-52",
            "029.138.476-50",
            "827.164.593-55",
            "471.859.063-93",
            "639.478.152-55",
            "726.813.594-73",
            "639.028.417-96",
            "064.891.537-93",
            "572.394.081-32",
            "639.278.450-00",
            "913.720.658-30"
        ],
        "data": "2024-07-15T23:18:11"
    },
    {
        "codigo_jogo": "78e3602c-d797-46fd-831d-dcefa8d225bc",
        "tempo_duracao": 90,
        "atletas": [
            "958.130.762-12",
            "806.172.493-69",
            "652.709.814-67",
            "049.237.168-78",
            "827.164.593-55",
            "398.621.405-42",
            "914.063.825-15",
            "743.628.095-38",
            "185.693.274-55",
            "786.934.051-01",
            "703.241.659-43",
            "126.345.708-80",
            "735.821.906-68",
            "510.463.897-93",
            "984.570.123-04",
            "391.406.285-15",
            "829.154.730-05",
            "038.947.615-39",
            "293.485.061-70",
            "796.058.234-38"
        ],
        "data": "2022-07-25T21:55:34"
    },
    {
        "codigo_jogo": "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666",
        "tempo_duracao": 90,
        "atletas": [
            "653.087.219-12",
            "792.418.506-20",
            "387.290.561-95",
            "251.973.086-21",
            "738.246.195-55",
            "975.036.182-21",
            "604.782.135-90",
            "062.851.973-77",
            "852.463.719-64",
            "926.175.483-09",
            "674.935.820-92",
            "015.384.796-48",
            "612.590.473-34",
            "615.309.872-02",
            "746.592.803-65",
            "079.251.643-52",
            "824.031.956-42",
            "863.172.950-77",
            "896.074.231-78",
            "471.859.063-93"
        ],
        "data": "2021-01-12T10:57:09"
    },
    {
        "codigo_jogo": "7f8e437b-6f17-4140-9e23-425339bfcebb",
        "tempo_duracao": 120,
        "atletas": [
            "251.973.086-21",
            "387.290.561-95",
            "083.519.462-06",
            "785.034.196-10",
            "348.602.791-31",
            "703.241.659-43",
            "942.867.510-58",
            "903.561.872-68",
            "806.172.493-69",
            "567.309.241-52",
            "572.196.403-07",
            "059.287.346-38",
            "728.946.135-55",
            "926.175.483-09",
            "612.590.473-34",
            "392.150.648-42",
            "398.621.405-42",
            "739.025.146-80",
            "712.564.980-76",
            "253.968.471-82"
        ],
        "data": "2020-03-18T10:33:29"
    },
    {
        "codigo_jogo": "765c54c8-2aa9-4397-afb9-3ae95acd9dcc",
        "tempo_duracao": 90,
        "atletas": [
            "570.698.321-68",
            "975.036.182-21",
            "801.372.456-53",
            "458.370.962-56",
            "572.394.081-32",
            "460.921.835-60",
            "701.964.832-04",
            "321.647.985-46",
            "841.703.269-03",
            "059.287.346-38",
            "163.802.795-12",
            "728.946.135-55",
            "857.910.364-93",
            "840.921.573-04",
            "751.349.028-79",
            "278.396.041-96",
            "510.463.897-93",
            "064.891.537-93",
            "521.387.960-86",
            "183.027.645-07"
        ],
        "data": "2023-06-10T22:21:13"
    },
    {
        "codigo_jogo": "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
        "tempo_duracao": 90,
        "atletas": [
            "562.849.037-74",
            "291.460.738-50",
            "015.384.796-48",
            "510.463.897-93",
            "218.409.673-31",
            "196.345.087-66",
            "804.219.357-23",
            "689.402.537-10",
            "059.287.346-38",
            "493.067.852-83",
            "801.372.456-53",
            "521.387.960-86",
            "950.827.431-04",
            "530.276.194-70",
            "840.921.573-04",
            "596.041.873-84",
            "751.930.468-00",
            "064.891.537-93",
            "854.639.701-57",
            "846.709.531-84"
        ],
        "data": "2024-03-31T15:13:26"
    },
    {
        "codigo_jogo": "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
        "tempo_duracao": 90,
        "atletas": [
            "712.359.486-09",
            "378.465.192-55",
            "516.024.789-02",
            "085.963.217-21",
            "561.289.703-03",
            "769.310.485-20",
            "563.418.097-00",
            "976.458.213-37",
            "654.902.731-43",
            "512.706.349-25",
            "720.953.861-59",
            "079.251.643-52",
            "170.654.893-10",
            "780.431.625-90",
            "410.893.267-69",
            "869.175.302-12",
            "520.938.416-06",
            "251.340.678-80",
            "975.036.182-21",
            "768.502.314-80"
        ],
        "data": "2021-03-27T16:36:29"
    },
    {
        "codigo_jogo": "603650d4-529a-439c-93a1-c06f98be9de6",
        "tempo_duracao": 120,
        "atletas": [
            "371.950.268-68",
            "394.851.720-79",
            "780.431.625-90",
            "237.450.681-90",
            "192.768.304-13",
            "973.562.140-16",
            "478.193.205-32",
            "914.063.825-15",
            "674.935.820-92",
            "321.647.985-46",
            "597.423.186-46",
            "728.946.135-55",
            "639.278.450-00",
            "321.564.907-16",
            "391.406.285-15",
            "016.248.935-89",
            "806.932.417-13",
            "460.921.835-60",
            "251.973.086-21",
            "206.748.193-22"
        ],
        "data": "2023-11-24T01:59:33"
    },
    {
        "codigo_jogo": "620e906a-0ff8-45e4-9876-4da45cebab0b",
        "tempo_duracao": 120,
        "atletas": [
            "495.632.817-64",
            "401.597.836-66",
            "324.907.851-41",
            "176.208.934-31",
            "079.251.643-52",
            "639.478.152-55",
            "254.370.619-43",
            "185.693.274-55",
            "039.861.472-50",
            "143.567.290-99",
            "085.963.217-21",
            "914.063.825-15",
            "154.983.670-66",
            "735.821.906-68",
            "321.564.907-16",
            "572.196.403-07",
            "684.105.293-51",
            "512.706.349-25",
            "278.914.365-09",
            "189.207.645-49"
        ],
        "data": "2022-09-21T21:10:47"
    },
    {
        "codigo_jogo": "408b0ea3-8131-45d1-97ff-8fd2548a0c21",
        "tempo_duracao": 120,
        "atletas": [
            "891.742.560-76",
            "572.301.486-26",
            "806.932.417-13",
            "604.951.782-76",
            "682.379.450-00",
            "180.564.723-71",
            "746.019.852-85",
            "176.208.934-31",
            "245.706.391-43",
            "027.153.864-35",
            "205.369.741-52",
            "653.087.219-12",
            "047.352.961-07",
            "895.374.216-19",
            "571.486.293-73",
            "072.891.435-23",
            "075.316.842-17",
            "561.289.703-03",
            "827.164.593-55",
            "475.213.908-14"
        ],
        "data": "2021-04-29T20:10:31"
    },
    {
        "codigo_jogo": "3444a90c-d5a2-4b30-9f2c-99df467c5813",
        "tempo_duracao": 120,
        "atletas": [
            "516.024.789-02",
            "271.543.960-16",
            "308.621.457-08",
            "253.941.860-06",
            "391.406.285-15",
            "807.513.249-14",
            "471.859.063-93",
            "903.561.872-68",
            "137.985.204-88",
            "975.036.182-21",
            "650.137.489-84",
            "891.742.560-76",
            "572.394.081-32",
            "615.309.872-02",
            "739.208.564-65",
            "829.154.730-05",
            "841.703.269-03",
            "324.907.851-41",
            "947.386.152-46",
            "802.917.543-41"
        ],
        "data": "2020-01-14T08:12:22"
    },
    {
        "codigo_jogo": "3ffef96c-187c-4262-846b-da6a30b40036",
        "tempo_duracao": 90,
        "atletas": [
            "582.314.067-35",
            "827.164.593-55",
            "478.193.205-32",
            "893.726.450-10",
            "721.653.098-59",
            "271.543.960-16",
            "845.109.672-76",
            "946.523.701-99",
            "516.024.789-02",
            "298.043.156-70",
            "652.709.814-67",
            "298.034.751-50",
            "638.910.572-02",
            "510.463.897-93",
            "983.102.765-59",
            "956.843.102-06",
            "321.564.907-16",
            "083.519.462-06",
            "143.567.290-99",
            "674.935.820-92"
        ],
        "data": "2024-08-23T19:33:58"
    },
    {
        "codigo_jogo": "a44e3917-e9da-4ad0-9622-556e37dad81c",
        "tempo_duracao": 90,
        "atletas": [
            "947.386.152-46",
            "824.031.956-42",
            "846.709.531-84",
            "701.385.694-01",
            "721.653.098-59",
            "752.981.306-40",
            "301.456.872-44",
            "543.729.608-83",
            "081.369.725-59",
            "341.765.092-52",
            "567.309.241-52",
            "351.690.472-07",
            "734.581.062-35",
            "976.458.213-37",
            "682.379.450-00",
            "684.105.293-51",
            "703.241.659-43",
            "638.910.572-02",
            "561.289.703-03",
            "738.265.910-03"
        ],
        "data": "2024-04-25T11:09:34"
    },
    {
        "codigo_jogo": "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
        "tempo_duracao": 120,
        "atletas": [
            "308.621.457-08",
            "682.379.450-00",
            "739.025.146-80",
            "854.639.701-57",
            "326.407.985-29",
            "376.245.019-61",
            "530.978.261-30",
            "738.109.546-75",
            "639.028.417-96",
            "806.172.493-69",
            "734.581.062-35",
            "154.983.670-66",
            "936.041.587-10",
            "371.950.268-68",
            "914.063.825-15",
            "254.370.619-43",
            "257.081.364-80",
            "413.870.956-84",
            "192.768.304-13",
            "253.968.471-82"
        ],
        "data": "2022-10-26T06:04:30"
    },
    {
        "codigo_jogo": "25c14fef-08b0-4c50-8bc5-7e72f348b304",
        "tempo_duracao": 120,
        "atletas": [
            "895.703.241-04",
            "652.709.814-67",
            "510.463.897-93",
            "829.371.465-46",
            "391.406.285-15",
            "869.710.352-59",
            "640.581.329-06",
            "712.564.980-76",
            "628.459.701-02",
            "914.063.825-15",
            "062.851.973-77",
            "705.194.683-84",
            "752.981.306-40",
            "428.970.516-20",
            "720.953.861-59",
            "072.415.386-17",
            "561.289.703-03",
            "780.431.625-90",
            "537.218.694-19",
            "495.632.817-64"
        ],
        "data": "2022-07-07T06:19:03"
    },
    {
        "codigo_jogo": "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
        "tempo_duracao": 120,
        "atletas": [
            "582.314.067-35",
            "520.938.416-06",
            "291.460.738-50",
            "137.985.204-88",
            "829.371.465-46",
            "301.456.872-44",
            "458.370.962-56",
            "739.025.146-80",
            "043.289.576-00",
            "723.158.960-02",
            "493.067.852-83",
            "251.973.086-21",
            "806.172.493-69",
            "962.530.178-02",
            "376.245.019-61",
            "804.129.356-51",
            "321.647.985-46",
            "695.038.147-66",
            "079.251.643-52",
            "097.621.583-77"
        ],
        "data": "2024-01-12T09:20:26"
    },
    {
        "codigo_jogo": "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
        "tempo_duracao": 90,
        "atletas": [
            "196.345.087-66",
            "015.384.796-48",
            "386.174.520-80",
            "629.154.780-58",
            "739.025.146-80",
            "962.415.803-70",
            "256.317.804-53",
            "935.761.280-77",
            "861.934.705-57",
            "391.406.285-15",
            "189.245.360-60",
            "652.709.814-67",
            "571.486.293-73",
            "628.904.351-05",
            "738.109.546-75",
            "176.208.934-31",
            "049.237.168-78",
            "291.460.738-50",
            "832.479.015-23",
            "308.621.457-08"
        ],
        "data": "2022-06-19T11:04:50"
    },
    {
        "codigo_jogo": "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
        "tempo_duracao": 90,
        "atletas": [
            "413.870.956-84",
            "351.690.472-07",
            "390.278.164-50",
            "728.053.614-07",
            "652.709.814-67",
            "314.986.750-93",
            "615.309.872-02",
            "863.172.950-77",
            "120.983.765-02",
            "081.369.725-59",
            "640.581.329-06",
            "387.290.561-95",
            "137.985.204-88",
            "716.305.298-77",
            "653.087.219-12",
            "768.502.314-80",
            "735.948.612-28",
            "806.172.493-69",
            "104.985.326-15",
            "950.827.431-04"
        ],
        "data": "2024-11-17T12:13:45"
    },
    {
        "codigo_jogo": "a8d264aa-c231-4533-b5ae-de8ffeff3762",
        "tempo_duracao": 120,
        "atletas": [
            "896.074.231-78",
            "976.458.213-37",
            "546.023.897-83",
            "169.850.347-48",
            "398.621.405-42",
            "027.153.864-35",
            "126.345.708-80",
            "079.251.643-52",
            "298.043.156-70",
            "895.374.216-19",
            "520.938.416-06",
            "726.813.594-73",
            "016.248.935-89",
            "853.164.279-55",
            "218.409.673-31",
            "251.340.678-80",
            "962.530.178-02",
            "326.407.985-29",
            "348.602.791-31",
            "075.316.842-17"
        ],
        "data": "2021-04-01T23:20:19"
    },
    {
        "codigo_jogo": "75b7054c-307f-4f57-8c03-ddefea43b405",
        "tempo_duracao": 90,
        "atletas": [
            "189.245.360-60",
            "537.218.694-19",
            "253.018.476-35",
            "351.690.472-07",
            "873.612.590-30",
            "572.301.486-26",
            "629.154.780-58",
            "126.345.708-80",
            "316.475.829-46",
            "846.709.531-84",
            "584.290.371-79",
            "726.813.594-73",
            "896.074.231-78",
            "869.175.302-12",
            "346.705.192-80",
            "321.564.907-16",
            "143.567.290-99",
            "926.175.483-09",
            "271.543.960-16",
            "986.021.573-12"
        ],
        "data": "2024-10-22T02:42:58"
    },
    {
        "codigo_jogo": "848649e0-363f-4568-8d6e-e0acf2585f53",
        "tempo_duracao": 90,
        "atletas": [
            "083.519.462-06",
            "640.581.329-06",
            "562.849.037-74",
            "185.693.274-55",
            "319.576.824-00",
            "293.485.061-70",
            "639.478.152-55",
            "029.138.476-50",
            "796.058.234-38",
            "206.748.193-22",
            "594.762.038-38",
            "170.654.893-10",
            "682.379.450-00",
            "806.172.493-69",
            "748.012.536-44",
            "942.867.510-58",
            "895.703.241-04",
            "829.154.730-05",
            "460.921.835-60",
            "684.105.293-51"
        ],
        "data": "2023-10-05T13:46:40"
    },
    {
        "codigo_jogo": "67a02cf2-4143-474f-84fc-5793acf69256",
        "tempo_duracao": 120,
        "atletas": [
            "869.175.302-12",
            "840.921.573-04",
            "167.304.295-34",
            "829.154.730-05",
            "584.290.371-79",
            "567.309.241-52",
            "154.029.678-49",
            "927.680.431-50",
            "075.316.842-17",
            "640.581.329-06",
            "064.891.537-93",
            "251.340.678-80",
            "802.917.543-41",
            "394.851.720-79",
            "615.309.872-02",
            "390.278.164-50",
            "935.761.280-77",
            "845.362.097-00",
            "495.632.817-64",
            "378.465.192-55"
        ],
        "data": "2022-11-18T06:08:29"
    }
];

// Insere os jogos e verifica a validade
if (jogos.length > 0) {
    db.Jogos.insertMany(jogos);
    print("Jogos inseridos com sucesso!");
} else {
    print("Algo de errado aconteceu com Jogos");
}

/* Inserindo múltiplas Estatísticas */
let estatisticas = [
    {
        "codigo_estatistica": "4e133f0c-c49b-4d40-ba05-b6c648052f79",
        "codigos_jogos": [
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a"
        ],
        "chutes_ao_gol": 21,
        "gols": 11,
        "passes": 139,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "338987bd-cfaf-472d-ba47-ca0aea5dd038",
        "codigos_jogos": [
            "666c475d-71e9-410c-9f92-7241b7a20caf"
        ],
        "chutes_ao_gol": 6,
        "gols": 6,
        "passes": 380,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "1ffdc274-2569-4cff-9f09-6c7470a287b8",
        "codigos_jogos": [
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62"
        ],
        "chutes_ao_gol": 23,
        "gols": 17,
        "passes": 176,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "4cec71c6-908b-42b1-9a3d-3f68bed8523a",
        "codigos_jogos": [
            "59464500-93ec-4f33-b290-42a4de096445"
        ],
        "chutes_ao_gol": 21,
        "gols": 14,
        "passes": 159,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "22537682-6006-401f-9929-da877c3235e3",
        "codigos_jogos": [
            "694bd5de-ac12-4422-8546-0e3a26b4f526"
        ],
        "chutes_ao_gol": 27,
        "gols": 18,
        "passes": 350,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "cd553633-395c-4ce6-8850-edf54da42f65",
        "codigos_jogos": [
            "b1b28a83-dd96-4386-a9c0-42702bb19428"
        ],
        "chutes_ao_gol": 19,
        "gols": 1,
        "passes": 332,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "8c6c58bf-7896-469e-bf81-595e8e2f3d37",
        "codigos_jogos": [
            "1937ce0d-68b8-4df6-be79-15a4388a1747"
        ],
        "chutes_ao_gol": 18,
        "gols": 14,
        "passes": 388,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "2494c459-2beb-4c1b-81bc-b4bd63ead439",
        "codigos_jogos": [
            "b0f57921-05d1-4854-b825-333a1adcecf9"
        ],
        "chutes_ao_gol": 19,
        "gols": 9,
        "passes": 470,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "13f72a84-945c-4f8c-8630-a03577b98172",
        "codigos_jogos": [
            "03cb7280-3532-4515-9549-eecdc2ca276a"
        ],
        "chutes_ao_gol": 13,
        "gols": 13,
        "passes": 101,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "4ba0ef1a-8bd4-4e48-bae2-d5fdf6c9a3ac",
        "codigos_jogos": [
            "2d189a58-a94d-416f-babe-40351b02ace3"
        ],
        "chutes_ao_gol": 23,
        "gols": 2,
        "passes": 123,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "9de9febb-d4bc-4d78-99f2-e37743ff6a05",
        "codigos_jogos": [
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d"
        ],
        "chutes_ao_gol": 27,
        "gols": 2,
        "passes": 377,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "6d98ac73-6ae0-47cd-b1d3-96c4a2e680d4",
        "codigos_jogos": [
            "301a737e-6b8e-4779-aaca-c8f3c814b44d"
        ],
        "chutes_ao_gol": 20,
        "gols": 1,
        "passes": 246,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "8ba7aec7-9ed5-4553-ba8b-08344c550ddd",
        "codigos_jogos": [
            "7d00a1e5-66c1-49c1-aa52-259fd894393c"
        ],
        "chutes_ao_gol": 29,
        "gols": 4,
        "passes": 492,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "d03a759b-d098-4576-a93f-5294dcfbb620",
        "codigos_jogos": [
            "b99da215-54fb-41f1-bb06-e9d50cf121ad"
        ],
        "chutes_ao_gol": 25,
        "gols": 13,
        "passes": 291,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "7af20fa8-e37c-4830-9a33-68b87d87679d",
        "codigos_jogos": [
            "a4829aa4-7123-481b-aeb1-c6b167c63f54"
        ],
        "chutes_ao_gol": 17,
        "gols": 12,
        "passes": 141,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "4c973231-9f0f-47b3-ba43-2350d7201b07",
        "codigos_jogos": [
            "2fce7856-417f-4484-b736-576f6c9c02a4"
        ],
        "chutes_ao_gol": 22,
        "gols": 4,
        "passes": 434,
        "cartoes_amarelos": 2,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "dd67a8b7-7ddb-4e1c-bccb-5b728ba094ad",
        "codigos_jogos": [
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5"
        ],
        "chutes_ao_gol": 10,
        "gols": 8,
        "passes": 301,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "52fc4283-447d-401f-ad18-0effadb19f09",
        "codigos_jogos": [
            "9149f6ee-b884-4ff0-946e-787302108c58"
        ],
        "chutes_ao_gol": 28,
        "gols": 7,
        "passes": 101,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "6646ace9-a876-44d0-aab1-b9f239de2b6e",
        "codigos_jogos": [
            "59728a78-80d5-40a0-8f8d-7519586de4dd"
        ],
        "chutes_ao_gol": 19,
        "gols": 17,
        "passes": 317,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "74f51511-81b7-4564-825f-7d39ecd149b0",
        "codigos_jogos": [
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59"
        ],
        "chutes_ao_gol": 12,
        "gols": 3,
        "passes": 335,
        "cartoes_amarelos": 2,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "35088a70-b530-474a-bef3-a46e0a7b2348",
        "codigos_jogos": [
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887"
        ],
        "chutes_ao_gol": 13,
        "gols": 3,
        "passes": 471,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "b94cb8a5-1cd2-4fb5-8d2e-66c6b6f2f8f2",
        "codigos_jogos": [
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00"
        ],
        "chutes_ao_gol": 30,
        "gols": 21,
        "passes": 314,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "501da7a8-2d01-4c75-93e3-78bc2dce0b78",
        "codigos_jogos": [
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04"
        ],
        "chutes_ao_gol": 12,
        "gols": 3,
        "passes": 134,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "a0a5494f-e3c9-4309-8508-20cc242a96b5",
        "codigos_jogos": [
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa"
        ],
        "chutes_ao_gol": 6,
        "gols": 3,
        "passes": 406,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "23879e09-a706-4b38-b730-99f95780673d",
        "codigos_jogos": [
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30"
        ],
        "chutes_ao_gol": 6,
        "gols": 1,
        "passes": 479,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "44a9f1dc-1283-40e2-bde7-18e7950fd238",
        "codigos_jogos": [
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16"
        ],
        "chutes_ao_gol": 19,
        "gols": 7,
        "passes": 376,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "651ebd4c-23e7-4caf-836f-58f72e16c070",
        "codigos_jogos": [
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e"
        ],
        "chutes_ao_gol": 9,
        "gols": 8,
        "passes": 248,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "c5cfb53f-c556-4856-a319-7261d494c220",
        "codigos_jogos": [
            "5f1aff1b-0c63-4209-88ee-577648f024ad"
        ],
        "chutes_ao_gol": 23,
        "gols": 10,
        "passes": 395,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "bcdb773b-8824-484d-aefe-63d16a11eee0",
        "codigos_jogos": [
            "fb600c35-f2a0-414a-b7cf-74bb15730be7"
        ],
        "chutes_ao_gol": 15,
        "gols": 7,
        "passes": 254,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "d4c441ad-43c9-4a02-a307-54019a3fae6b",
        "codigos_jogos": [
            "78e3602c-d797-46fd-831d-dcefa8d225bc"
        ],
        "chutes_ao_gol": 21,
        "gols": 7,
        "passes": 311,
        "cartoes_amarelos": 2,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "8fa338f9-0af8-4dc4-8353-6bb79b6752b2",
        "codigos_jogos": [
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666"
        ],
        "chutes_ao_gol": 6,
        "gols": 4,
        "passes": 402,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "c5e97ecd-5e8b-41fc-a26d-c1063c856080",
        "codigos_jogos": [
            "7f8e437b-6f17-4140-9e23-425339bfcebb"
        ],
        "chutes_ao_gol": 25,
        "gols": 21,
        "passes": 318,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "9b29053a-b40a-4a56-95ff-7769b2155edc",
        "codigos_jogos": [
            "765c54c8-2aa9-4397-afb9-3ae95acd9dcc"
        ],
        "chutes_ao_gol": 6,
        "gols": 2,
        "passes": 429,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "8bd8af62-479a-4c29-8f3c-dbd2ec5b0486",
        "codigos_jogos": [
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3"
        ],
        "chutes_ao_gol": 30,
        "gols": 16,
        "passes": 263,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "d567e2fe-d2d7-4700-9bfb-c5056bf3f60f",
        "codigos_jogos": [
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007"
        ],
        "chutes_ao_gol": 18,
        "gols": 4,
        "passes": 253,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "b5708495-1bb8-4d7e-b8ad-beae1b7cd210",
        "codigos_jogos": [
            "603650d4-529a-439c-93a1-c06f98be9de6"
        ],
        "chutes_ao_gol": 29,
        "gols": 17,
        "passes": 342,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "9c4c65f3-d6f6-4f51-b983-a5d2bb299a29",
        "codigos_jogos": [
            "620e906a-0ff8-45e4-9876-4da45cebab0b"
        ],
        "chutes_ao_gol": 14,
        "gols": 13,
        "passes": 462,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "efea4b8e-8428-4c9b-ba6b-7b8b96f6fedf",
        "codigos_jogos": [
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21"
        ],
        "chutes_ao_gol": 6,
        "gols": 4,
        "passes": 311,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "d9e85a52-b1b6-45d3-b92f-90b5e00aee94",
        "codigos_jogos": [
            "3444a90c-d5a2-4b30-9f2c-99df467c5813"
        ],
        "chutes_ao_gol": 21,
        "gols": 4,
        "passes": 298,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "6a4866b4-b0dd-40f2-af6e-fc98932eb462",
        "codigos_jogos": [
            "3ffef96c-187c-4262-846b-da6a30b40036"
        ],
        "chutes_ao_gol": 11,
        "gols": 5,
        "passes": 431,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "eb4aa190-6bae-4d45-a7e7-b0ac218347d5",
        "codigos_jogos": [
            "a44e3917-e9da-4ad0-9622-556e37dad81c"
        ],
        "chutes_ao_gol": 16,
        "gols": 2,
        "passes": 374,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "0b53bb05-fdb8-4430-90ea-869a88e849d4",
        "codigos_jogos": [
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f"
        ],
        "chutes_ao_gol": 6,
        "gols": 2,
        "passes": 293,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "8ea064e0-445a-4eab-9d94-81e0d33e6924",
        "codigos_jogos": [
            "25c14fef-08b0-4c50-8bc5-7e72f348b304"
        ],
        "chutes_ao_gol": 24,
        "gols": 1,
        "passes": 137,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "70c6a6c9-dade-42cd-8876-a6b455213dbc",
        "codigos_jogos": [
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4"
        ],
        "chutes_ao_gol": 28,
        "gols": 21,
        "passes": 386,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "436dcca3-03bc-4a68-a0f9-10404bf4abe8",
        "codigos_jogos": [
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c"
        ],
        "chutes_ao_gol": 11,
        "gols": 5,
        "passes": 255,
        "cartoes_amarelos": 0,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "0e3bf1e7-e031-469f-b6d3-7d2180a40e59",
        "codigos_jogos": [
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5"
        ],
        "chutes_ao_gol": 11,
        "gols": 11,
        "passes": 160,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "9bb76dd8-227f-42b5-a9fb-b156a49736e9",
        "codigos_jogos": [
            "a8d264aa-c231-4533-b5ae-de8ffeff3762"
        ],
        "chutes_ao_gol": 12,
        "gols": 11,
        "passes": 409,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "f0b0babc-6d3d-4677-b89c-0567a3f2068b",
        "codigos_jogos": [
            "75b7054c-307f-4f57-8c03-ddefea43b405"
        ],
        "chutes_ao_gol": 17,
        "gols": 7,
        "passes": 382,
        "cartoes_amarelos": 2,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "35bb8b63-d7e5-4db1-bb5b-7e2ec345d2b3",
        "codigos_jogos": [
            "848649e0-363f-4568-8d6e-e0acf2585f53"
        ],
        "chutes_ao_gol": 17,
        "gols": 14,
        "passes": 373,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "ee7e1bd3-264e-4f75-96fe-9c086bf1b54c",
        "codigos_jogos": [
            "67a02cf2-4143-474f-84fc-5793acf69256"
        ],
        "chutes_ao_gol": 14,
        "gols": 4,
        "passes": 284,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "38c7e75f-4d13-4b22-b313-de8741672b74",
        "codigos_jogos": [
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666",
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "b99da215-54fb-41f1-bb06-e9d50cf121ad",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62"
        ],
        "chutes_ao_gol": 129,
        "gols": 87,
        "passes": 3164,
        "cartoes_amarelos": 25,
        "cartoes_vermelhos": 9
    },
    {
        "codigo_estatistica": "ff26313c-f74e-47a8-a401-fcfd99c546d6",
        "codigos_jogos": [
            "75b7054c-307f-4f57-8c03-ddefea43b405",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "603650d4-529a-439c-93a1-c06f98be9de6"
        ],
        "chutes_ao_gol": 85,
        "gols": 40,
        "passes": 1528,
        "cartoes_amarelos": 14,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "3fa6a405-5d54-4ad6-9aa1-f0a5b1b75272",
        "codigos_jogos": [
            "59728a78-80d5-40a0-8f8d-7519586de4dd",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "7d00a1e5-66c1-49c1-aa52-259fd894393c",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "2fce7856-417f-4484-b736-576f6c9c02a4"
        ],
        "chutes_ao_gol": 160,
        "gols": 74,
        "passes": 2762,
        "cartoes_amarelos": 24,
        "cartoes_vermelhos": 8
    },
    {
        "codigo_estatistica": "9c152b5c-4ea0-436a-81cc-55c48105654c",
        "codigos_jogos": [
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "78e3602c-d797-46fd-831d-dcefa8d225bc"
        ],
        "chutes_ao_gol": 177,
        "gols": 116,
        "passes": 2893,
        "cartoes_amarelos": 26,
        "cartoes_vermelhos": 6
    },
    {
        "codigo_estatistica": "cc70aeee-51f8-409a-92a0-f71d1d4f7cfe",
        "codigos_jogos": [
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
            "03cb7280-3532-4515-9549-eecdc2ca276a"
        ],
        "chutes_ao_gol": 64,
        "gols": 29,
        "passes": 1021,
        "cartoes_amarelos": 10,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "9255ea7d-4b6d-45f6-837e-7f1004f9317a",
        "codigos_jogos": [
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "59464500-93ec-4f33-b290-42a4de096445",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a"
        ],
        "chutes_ao_gol": 202,
        "gols": 115,
        "passes": 2357,
        "cartoes_amarelos": 35,
        "cartoes_vermelhos": 8
    },
    {
        "codigo_estatistica": "e1ee86e1-f2a2-43c4-885b-68b62763652b",
        "codigos_jogos": [
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
            "b99da215-54fb-41f1-bb06-e9d50cf121ad"
        ],
        "chutes_ao_gol": 153,
        "gols": 82,
        "passes": 1679,
        "cartoes_amarelos": 30,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "f8ff57e5-4bd2-43e0-9e65-58ca204e948a",
        "codigos_jogos": [
            "78e3602c-d797-46fd-831d-dcefa8d225bc",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "59464500-93ec-4f33-b290-42a4de096445",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "25c14fef-08b0-4c50-8bc5-7e72f348b304",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666",
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "666c475d-71e9-410c-9f92-7241b7a20caf"
        ],
        "chutes_ao_gol": 148,
        "gols": 74,
        "passes": 3327,
        "cartoes_amarelos": 36,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "d262f8e2-9a07-4243-a02a-e82ee5a94259",
        "codigos_jogos": [
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
            "603650d4-529a-439c-93a1-c06f98be9de6"
        ],
        "chutes_ao_gol": 47,
        "gols": 21,
        "passes": 595,
        "cartoes_amarelos": 4,
        "cartoes_vermelhos": 0
    },
    {
        "codigo_estatistica": "d5736f43-8174-4a9a-a5bc-c589cbcdcf9a",
        "codigos_jogos": [
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
            "59728a78-80d5-40a0-8f8d-7519586de4dd",
            "848649e0-363f-4568-8d6e-e0acf2585f53"
        ],
        "chutes_ao_gol": 151,
        "gols": 86,
        "passes": 2235,
        "cartoes_amarelos": 30,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "35b354ee-4db3-4a9a-b266-47711fe0b710",
        "codigos_jogos": [
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "2fce7856-417f-4484-b736-576f6c9c02a4",
            "7d00a1e5-66c1-49c1-aa52-259fd894393c"
        ],
        "chutes_ao_gol": 215,
        "gols": 88,
        "passes": 3142,
        "cartoes_amarelos": 28,
        "cartoes_vermelhos": 10
    },
    {
        "codigo_estatistica": "bcf4b1a7-92cb-48fe-871a-b3d67144aa0d",
        "codigos_jogos": [
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "78e3602c-d797-46fd-831d-dcefa8d225bc",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "2fce7856-417f-4484-b736-576f6c9c02a4"
        ],
        "chutes_ao_gol": 163,
        "gols": 64,
        "passes": 3266,
        "cartoes_amarelos": 21,
        "cartoes_vermelhos": 9
    },
    {
        "codigo_estatistica": "144bbed4-69d3-401a-bc76-25183ce085eb",
        "codigos_jogos": [
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "848649e0-363f-4568-8d6e-e0acf2585f53"
        ],
        "chutes_ao_gol": 82,
        "gols": 41,
        "passes": 1719,
        "cartoes_amarelos": 14,
        "cartoes_vermelhos": 6
    },
    {
        "codigo_estatistica": "ef7da779-006b-40dd-bdc0-ee9859c05b6a",
        "codigos_jogos": [
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16"
        ],
        "chutes_ao_gol": 38,
        "gols": 8,
        "passes": 708,
        "cartoes_amarelos": 2,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "04c1be45-bd29-4b47-b70e-96a660683467",
        "codigos_jogos": [
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666",
            "59464500-93ec-4f33-b290-42a4de096445",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
            "b1b28a83-dd96-4386-a9c0-42702bb19428"
        ],
        "chutes_ao_gol": 145,
        "gols": 52,
        "passes": 2604,
        "cartoes_amarelos": 21,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "acc2f5f0-8095-41d8-8b1c-374235b87d10",
        "codigos_jogos": [
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "b99da215-54fb-41f1-bb06-e9d50cf121ad"
        ],
        "chutes_ao_gol": 186,
        "gols": 118,
        "passes": 2723,
        "cartoes_amarelos": 28,
        "cartoes_vermelhos": 12
    },
    {
        "codigo_estatistica": "44c03cfa-e06b-4227-be91-a1326eb75c41",
        "codigos_jogos": [
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "25c14fef-08b0-4c50-8bc5-7e72f348b304",
            "848649e0-363f-4568-8d6e-e0acf2585f53"
        ],
        "chutes_ao_gol": 193,
        "gols": 99,
        "passes": 2522,
        "cartoes_amarelos": 16,
        "cartoes_vermelhos": 10
    },
    {
        "codigo_estatistica": "9fefaab8-c4ea-4e77-af8d-03c9cfcf916f",
        "codigos_jogos": [
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "b99da215-54fb-41f1-bb06-e9d50cf121ad",
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21"
        ],
        "chutes_ao_gol": 50,
        "gols": 26,
        "passes": 1453,
        "cartoes_amarelos": 10,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "b5817992-e70e-4c7f-ab7c-d65bfac75525",
        "codigos_jogos": [
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "694bd5de-ac12-4422-8546-0e3a26b4f526"
        ],
        "chutes_ao_gol": 74,
        "gols": 50,
        "passes": 1259,
        "cartoes_amarelos": 11,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "ba988cd7-ff45-4810-84bd-32edf503e318",
        "codigos_jogos": [
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "2fce7856-417f-4484-b736-576f6c9c02a4",
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4"
        ],
        "chutes_ao_gol": 114,
        "gols": 55,
        "passes": 2511,
        "cartoes_amarelos": 9,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "a18f2901-c7b6-4190-a7ce-18f765424bd8",
        "codigos_jogos": [
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "75b7054c-307f-4f57-8c03-ddefea43b405",
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "765c54c8-2aa9-4397-afb9-3ae95acd9dcc",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "59464500-93ec-4f33-b290-42a4de096445",
            "1937ce0d-68b8-4df6-be79-15a4388a1747"
        ],
        "chutes_ao_gol": 153,
        "gols": 81,
        "passes": 2973,
        "cartoes_amarelos": 22,
        "cartoes_vermelhos": 9
    },
    {
        "codigo_estatistica": "efa6415e-66a1-47fe-b47b-98c1177fecf5",
        "codigos_jogos": [
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "3444a90c-d5a2-4b30-9f2c-99df467c5813",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887"
        ],
        "chutes_ao_gol": 150,
        "gols": 81,
        "passes": 2790,
        "cartoes_amarelos": 16,
        "cartoes_vermelhos": 6
    },
    {
        "codigo_estatistica": "e8a01b82-a4e6-46e3-b03b-76cb6d1b744e",
        "codigos_jogos": [
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "9149f6ee-b884-4ff0-946e-787302108c58"
        ],
        "chutes_ao_gol": 44,
        "gols": 9,
        "passes": 475,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 1
    },
    {
        "codigo_estatistica": "35983499-9684-4359-bc4c-27a788f00f49",
        "codigos_jogos": [
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5"
        ],
        "chutes_ao_gol": 149,
        "gols": 80,
        "passes": 2526,
        "cartoes_amarelos": 25,
        "cartoes_vermelhos": 11
    },
    {
        "codigo_estatistica": "f19a546b-8b2d-44c8-963b-3fba2502dc68",
        "codigos_jogos": [
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "59728a78-80d5-40a0-8f8d-7519586de4dd"
        ],
        "chutes_ao_gol": 44,
        "gols": 26,
        "passes": 1032,
        "cartoes_amarelos": 8,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "f26f1c1c-5be2-47db-84c2-0da1377e41d5",
        "codigos_jogos": [
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "2d189a58-a94d-416f-babe-40351b02ace3"
        ],
        "chutes_ao_gol": 108,
        "gols": 39,
        "passes": 1066,
        "cartoes_amarelos": 9,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "fc8f3ef6-f5cb-4d86-a626-a27617f701ef",
        "codigos_jogos": [
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "b1b28a83-dd96-4386-a9c0-42702bb19428"
        ],
        "chutes_ao_gol": 112,
        "gols": 37,
        "passes": 2733,
        "cartoes_amarelos": 19,
        "cartoes_vermelhos": 9
    },
    {
        "codigo_estatistica": "d9108086-f90b-4695-8b27-74835ad8358f",
        "codigos_jogos": [
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "fb600c35-f2a0-414a-b7cf-74bb15730be7"
        ],
        "chutes_ao_gol": 27,
        "gols": 10,
        "passes": 589,
        "cartoes_amarelos": 3,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "ed75498e-fd11-41af-a8ed-9ca88d2df457",
        "codigos_jogos": [
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "5f1aff1b-0c63-4209-88ee-577648f024ad"
        ],
        "chutes_ao_gol": 138,
        "gols": 60,
        "passes": 1936,
        "cartoes_amarelos": 18,
        "cartoes_vermelhos": 8
    },
    {
        "codigo_estatistica": "17cdf23c-2744-469a-b773-db72c64ce69f",
        "codigos_jogos": [
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "765c54c8-2aa9-4397-afb9-3ae95acd9dcc",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "848649e0-363f-4568-8d6e-e0acf2585f53"
        ],
        "chutes_ao_gol": 130,
        "gols": 69,
        "passes": 2910,
        "cartoes_amarelos": 21,
        "cartoes_vermelhos": 11
    },
    {
        "codigo_estatistica": "960a32ed-c565-4bfd-aafb-3d7dd9f2c323",
        "codigos_jogos": [
            "3444a90c-d5a2-4b30-9f2c-99df467c5813",
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30"
        ],
        "chutes_ao_gol": 40,
        "gols": 8,
        "passes": 1248,
        "cartoes_amarelos": 1,
        "cartoes_vermelhos": 2
    },
    {
        "codigo_estatistica": "508e53c6-df77-43da-8c5a-7f3ceb34128f",
        "codigos_jogos": [
            "59728a78-80d5-40a0-8f8d-7519586de4dd",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e"
        ],
        "chutes_ao_gol": 28,
        "gols": 25,
        "passes": 565,
        "cartoes_amarelos": 5,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "441fc202-c858-4a18-944b-f3fcc8e7dd83",
        "codigos_jogos": [
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "b1b28a83-dd96-4386-a9c0-42702bb19428",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "2fce7856-417f-4484-b736-576f6c9c02a4",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d"
        ],
        "chutes_ao_gol": 167,
        "gols": 68,
        "passes": 2903,
        "cartoes_amarelos": 19,
        "cartoes_vermelhos": 5
    },
    {
        "codigo_estatistica": "022b746b-a4e9-498a-957e-c5d83a684d0b",
        "codigos_jogos": [
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "75b7054c-307f-4f57-8c03-ddefea43b405",
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "694bd5de-ac12-4422-8546-0e3a26b4f526"
        ],
        "chutes_ao_gol": 172,
        "gols": 73,
        "passes": 2087,
        "cartoes_amarelos": 16,
        "cartoes_vermelhos": 6
    },
    {
        "codigo_estatistica": "abd98db5-7c52-49d8-bdeb-0e6c6d6375e2",
        "codigos_jogos": [
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e",
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59"
        ],
        "chutes_ao_gol": 72,
        "gols": 28,
        "passes": 1079,
        "cartoes_amarelos": 7,
        "cartoes_vermelhos": 5
    },
    {
        "codigo_estatistica": "d7676f36-946e-4823-b9ca-74a46c01b957",
        "codigos_jogos": [
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "2fce7856-417f-4484-b736-576f6c9c02a4",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "3444a90c-d5a2-4b30-9f2c-99df467c5813",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "7d00a1e5-66c1-49c1-aa52-259fd894393c"
        ],
        "chutes_ao_gol": 167,
        "gols": 69,
        "passes": 3404,
        "cartoes_amarelos": 26,
        "cartoes_vermelhos": 9
    },
    {
        "codigo_estatistica": "7c138c07-e2b3-486b-a43d-4ad8a84f97a9",
        "codigos_jogos": [
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c"
        ],
        "chutes_ao_gol": 141,
        "gols": 80,
        "passes": 2818,
        "cartoes_amarelos": 16,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "c4e4cb55-cf34-418a-9821-597a7a4be8e5",
        "codigos_jogos": [
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "3444a90c-d5a2-4b30-9f2c-99df467c5813",
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "7d00a1e5-66c1-49c1-aa52-259fd894393c"
        ],
        "chutes_ao_gol": 159,
        "gols": 71,
        "passes": 3108,
        "cartoes_amarelos": 31,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "88a0b863-1b05-4993-b3ba-8cf22f5dd815",
        "codigos_jogos": [
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "59728a78-80d5-40a0-8f8d-7519586de4dd",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "7f8e437b-6f17-4140-9e23-425339bfcebb",
            "620e906a-0ff8-45e4-9876-4da45cebab0b"
        ],
        "chutes_ao_gol": 151,
        "gols": 73,
        "passes": 3103,
        "cartoes_amarelos": 22,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "720c1332-4de9-41f2-a423-c2dcd1e46158",
        "codigos_jogos": [
            "d11fceb6-b75b-4af3-b0b2-3fccc3d78887",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30",
            "9149f6ee-b884-4ff0-946e-787302108c58",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa"
        ],
        "chutes_ao_gol": 72,
        "gols": 21,
        "passes": 1833,
        "cartoes_amarelos": 6,
        "cartoes_vermelhos": 4
    },
    {
        "codigo_estatistica": "bdd4879f-6efb-4286-bd92-8794bb2e5c59",
        "codigos_jogos": [
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "7d00a1e5-66c1-49c1-aa52-259fd894393c",
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21"
        ],
        "chutes_ao_gol": 49,
        "gols": 21,
        "passes": 1265,
        "cartoes_amarelos": 9,
        "cartoes_vermelhos": 5
    },
    {
        "codigo_estatistica": "fda2b7a7-3da0-4b5f-801a-eb7de70d6435",
        "codigos_jogos": [
            "301a737e-6b8e-4779-aaca-c8f3c814b44d",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "78e3602c-d797-46fd-831d-dcefa8d225bc",
            "b99da215-54fb-41f1-bb06-e9d50cf121ad",
            "fb600c35-f2a0-414a-b7cf-74bb15730be7",
            "59728a78-80d5-40a0-8f8d-7519586de4dd",
            "694bd5de-ac12-4422-8546-0e3a26b4f526",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e"
        ],
        "chutes_ao_gol": 199,
        "gols": 115,
        "passes": 3125,
        "cartoes_amarelos": 20,
        "cartoes_vermelhos": 10
    },
    {
        "codigo_estatistica": "993ad266-3c31-4c2c-84fa-d3105ca9f39f",
        "codigos_jogos": [
            "03cb7280-3532-4515-9549-eecdc2ca276a",
            "a44e3917-e9da-4ad0-9622-556e37dad81c",
            "1c6f8b37-9190-4428-aee4-e3e9daf0bc59",
            "2fce7856-417f-4484-b736-576f6c9c02a4",
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "25c14fef-08b0-4c50-8bc5-7e72f348b304",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "7ebaa3ec-2e99-4b6e-9c0a-95e8b2171b30"
        ],
        "chutes_ao_gol": 149,
        "gols": 44,
        "passes": 2679,
        "cartoes_amarelos": 26,
        "cartoes_vermelhos": 6
    },
    {
        "codigo_estatistica": "c057cf1e-8ee6-4d51-9f0b-9c199cf85b52",
        "codigos_jogos": [
            "fb600c35-f2a0-414a-b7cf-74bb15730be7",
            "3444a90c-d5a2-4b30-9f2c-99df467c5813",
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666"
        ],
        "chutes_ao_gol": 42,
        "gols": 15,
        "passes": 954,
        "cartoes_amarelos": 7,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "2ce93d13-8024-4a1c-ace3-49b458d7eb49",
        "codigos_jogos": [
            "9d3eb5df-af56-4a25-ad4b-2a1dab542007",
            "765c54c8-2aa9-4397-afb9-3ae95acd9dcc",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "c0d1b978-7555-4bc5-8abc-11bc3c58b60e",
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "ab6bbbf8-0d24-4ee8-8b98-a83fac3fa9c5"
        ],
        "chutes_ao_gol": 98,
        "gols": 54,
        "passes": 2211,
        "cartoes_amarelos": 24,
        "cartoes_vermelhos": 8
    },
    {
        "codigo_estatistica": "a1af6c59-15a9-4396-9565-940b873a9b56",
        "codigos_jogos": [
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "2fce7856-417f-4484-b736-576f6c9c02a4"
        ],
        "chutes_ao_gol": 54,
        "gols": 22,
        "passes": 1106,
        "cartoes_amarelos": 6,
        "cartoes_vermelhos": 3
    },
    {
        "codigo_estatistica": "93fc92ec-f821-414c-a04f-07df664d78f7",
        "codigos_jogos": [
            "ec5ae6a3-df7c-469f-b560-0eea1d33140d",
            "6439f084-4e3f-49aa-be94-e2c3173fdd7f",
            "3ffef96c-187c-4262-846b-da6a30b40036",
            "e0290796-5d9f-4a33-bd9b-2f5b0ad21a62",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4"
        ],
        "chutes_ao_gol": 126,
        "gols": 74,
        "passes": 2498,
        "cartoes_amarelos": 13,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "173bc331-3dd4-488a-b6dd-8b9f3e543996",
        "codigos_jogos": [
            "848649e0-363f-4568-8d6e-e0acf2585f53",
            "3de1625b-68c6-4e5e-95ae-ab3d23408e00",
            "5f1aff1b-0c63-4209-88ee-577648f024ad",
            "1937ce0d-68b8-4df6-be79-15a4388a1747",
            "61b826b1-bdea-417c-8210-4dcfa74e0a2a",
            "a8d264aa-c231-4533-b5ae-de8ffeff3762",
            "fc4d7eeb-b106-4d79-8152-0b65a207c4e5",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54"
        ],
        "chutes_ao_gol": 148,
        "gols": 101,
        "passes": 2460,
        "cartoes_amarelos": 31,
        "cartoes_vermelhos": 7
    },
    {
        "codigo_estatistica": "303671ef-3fdc-430c-995f-488fde68c109",
        "codigos_jogos": [
            "75b7054c-307f-4f57-8c03-ddefea43b405",
            "3aee5e49-d855-4101-8b21-6c4b79da2dc3",
            "603650d4-529a-439c-93a1-c06f98be9de6",
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "620e906a-0ff8-45e4-9876-4da45cebab0b",
            "a4829aa4-7123-481b-aeb1-c6b167c63f54",
            "fb600c35-f2a0-414a-b7cf-74bb15730be7",
            "04d1fb56-4e45-464b-b653-ba4ee069fdfa",
            "1acbdb3b-7418-4ae9-a35c-65c2eb019a16"
        ],
        "chutes_ao_gol": 164,
        "gols": 91,
        "passes": 3192,
        "cartoes_amarelos": 24,
        "cartoes_vermelhos": 11
    },
    {
        "codigo_estatistica": "157f5d29-2b15-4b6f-8ce5-eac1debeb113",
        "codigos_jogos": [
            "67a02cf2-4143-474f-84fc-5793acf69256",
            "ce90b60a-2188-47e8-a803-4eda68a2e0b4",
            "408b0ea3-8131-45d1-97ff-8fd2548a0c21",
            "db7cca7f-a1f2-4e16-afc7-ce9739d1863c",
            "765c54c8-2aa9-4397-afb9-3ae95acd9dcc",
            "2d189a58-a94d-416f-babe-40351b02ace3",
            "b012ef76-0208-464c-8b9d-c7b1eb1f3b04",
            "666c475d-71e9-410c-9f92-7241b7a20caf",
            "c23fcfe7-f2ee-4f6f-aee4-75ff50eb2666"
        ],
        "chutes_ao_gol": 112,
        "gols": 51,
        "passes": 2704,
        "cartoes_amarelos": 25,
        "cartoes_vermelhos": 8
    }
];


// Insere as estatísticas e verifica a validade
if (estatisticas.length > 0) {
    db.Estatisticas.insertMany(estatisticas);
    print("Estatísticas inseridas com sucesso!");
} else {
    print("Algo de errado aconteceu com Estatísticas");
}