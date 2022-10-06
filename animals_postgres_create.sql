


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar,
	"address" varchar,
	"username" varchar,
	"location" varchar,
	"oauth" varchar,
	"pet" varchar,
	"email" varchar,

	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
);

CREATE TABLE public.animals (
	"_id" serial NOT NULL,
	"pet_name" varchar NOT NULL,
	"owner" varchar,
	"street_address" varchar,
	"eye_color" varchar,
	"gender" varchar,
	"image_url" varchar,
	"fur_color" varchar,
	"last_found" varchar,
	"user_id" varchar,
	"latitude" numeric,
	"longitude" numeric,
	"city" varchar,
	"state" varchar,

	CONSTRAINT "animals_pk" PRIMARY KEY ("_id")
	FOREIGN KEY ("user_id") references public.users("_id")
);