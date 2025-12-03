-- create database if not exists bloglaravel_database;
create database if not exists payment_wallet_db; 
use payment_wallet_db;

create table if not exists rols (
	id int primary key auto_increment,
	descripcion text not null,
	created_at timestamp default CURRENT_TIMESTAMP,
	updated_at timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
	id int primary key auto_increment,
	id_rol int not null,
	nombre varchar(200) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
	password varchar(20) not null,
	saldo_actual double(13, 4),
	estado boolean not null,
	created_at timestamp default CURRENT_TIMESTAMP,
	updated_at timestamp default CURRENT_TIMESTAMP,
	foreign key (id_rol) references rols(id) on update cascade on delete cascade
); 

CREATE  TABLE IF NOT EXISTS  movements (
	id int primary key AUTO_INCREMENT,
	id_user int,
	tipo varchar(20),
	descripcion text,
	monto decimal(13,4),
	fecha timestamp default CURRENT_TIMESTAMP,
	created_at timestamp default CURRENT_TIMESTAMP,
	updated_at timestamp default CURRENT_TIMESTAMP,
	FOREIGN key(id_user) references users(id) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS transactions (
	id int primary key auto_increment,
	tipo varchar(20) not null,
	monto decimal(13,4) not NULL  default 0,
	referencia varchar(30) not null,
	estado varchar(20) not null,
	description text,
	fecha_transaction TIMESTAMP not null default current_timestamp,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp
);


CREATE TABLE IF NOT EXISTS user_transactions (
	id int primary key auto_increment,
	id_user int not null,
	id_transaction int not null,
	foreign KEY (id_user) references users(id) on update cascade on delete cascade,
	foreign KEY (id_transaction) references transactions(id),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
); 

CREATE TABLE IF NOT EXISTS notifications (
	id int primary key auto_increment,
	id_user int not null,
	max_envio varchar(20) not null,
	max_retiro varchar(20) not null,
	fecha_actualization timestamp default current_timestamp,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,
	foreign KEY (id_user) references users(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS audits (
	id int PRIMARY KEY auto_increment,
	id_user int not null,
	actions varchar(150) not null,
	ip varchar(20) not null,
	navegador varchar(50) not null,
	fecha_hora_evento timestamp default current_timestamp,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,
	foreign key (id_user) references users(id) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS active_tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  token VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);