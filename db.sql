create database first_app;


-- Connect To DB in DBEaver and then run this queries;
create extension if not exists "uuid-ossp";

create table users(
	id uuid default uuid_generate_v4(),
	first_name varchar(50),
	last_name varchar(50),
	email varchar(100),
	mobile varchar(10),
	primary key(id)
);

