-- Criação da tabela usuário

CREATE TABLE Usuario (
    CPF INT PRIMARY KEY,
    Nome VARCHAR(30) NOT NULL,
    Email VARCHAR(40),
    MetodoPagamento VARCHAR(15) DEFAULT 'DINHEIRO'
);

-- Criação da Tabela motorista
CREATE TABLE Motorista (
    CPF INT PRIMARY KEY,
    Nome VARCHAR(30) NOT NULL,
    ContaBancaria CHAR(20) NOT NULL,
    CarroPlaca CHAR(7) NOT NULL,
    NumeroCNH INT NOT NULL,
    CNH INT,
    DataValidadeCNH DATE NOT NULL,
    DataCertificacaoCNH DATE NOT NULL
);

-- Tabela suporte ao usuário
CREATE TABLE SuporteAoUsuario (
    TicketID INT PRIMARY KEY,
    UsuarioCPF INT,
    StatusSolicitacao VARCHAR(15) NOT NULL,
    Responsavel VARCHAR(30) NOT NULL,
    FOREIGN KEY (UsuarioCPF) REFERENCES Usuario (CPF) ON DELETE CASCADE
);

-- Tabela avaliação suporte
CREATE TABLE AvaliacaoSuporte (
    AvaliacaoID INT PRIMARY KEY,
    UsuarioCPF INT NOT NULL,
    TicketID INT NOT NULL,
    Estrelas SMALLINT,
    Comentario TEXT NOT NULL,
    FOREIGN KEY (UsuarioCPF) REFERENCES Usuario (CPF),
    FOREIGN KEY (TicketID) REFERENCES SuporteAoUsuario (TicketID)
);

-- Tabela viagem
CREATE TABLE Viagem (
    ViagemID INT PRIMARY KEY,
    UsuarioCPF INT NOT NULL,
    MotoristaCPF INT NOT NULL,
    DataViagem DATE NOT NULL,
    LocalSaida VARCHAR(50) NOT NULL,
    DestinoFinal VARCHAR(50) NOT NULL,
    ValorViagem DECIMAL(10, 2) NOT NULL,
    QuantidadeDePassageiros SMALLINT NOT NULL,
    StatusViagem VARCHAR(20),
    TarifaUsuario DECIMAL(7, 2) NOT NULL,
    TarifaMotorista DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (UsuarioCPF) REFERENCES Usuario (CPF),
    FOREIGN KEY (MotoristaCPF) REFERENCES Motorista (CPF)
);

-- Tabela pagamento
CREATE TABLE Pagamento (
    PagamentoID INT PRIMARY KEY,
    ViagemID INT NOT NULL,
    ValorPagamento DECIMAL(10, 2) NOT NULL,
    TarifaUsuarioAtual DECIMAL(7, 2) NOT NULL,
    TarifaMotoristaAtual DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ViagemID) REFERENCES Viagem (ViagemID) ON DELETE CASCADE
);

-- Tabela avaliacao_corrida
CREATE TABLE AvaliacaoCorrida (
    AvaliacaoID INT PRIMARY KEY,
    UsuarioCPF INT NOT NULL,
    MotoristaCPF INT NOT NULL,
    ViagemID INT NOT NULL,
    Comentario TEXT NOT NULL,
    FOREIGN KEY (UsuarioCPF) REFERENCES Usuario (CPF),
    FOREIGN KEY (MotoristaCPF) REFERENCES Motorista (CPF)
);



