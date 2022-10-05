CREATE TABLE [IF NOT EXISTS] public.post (
	"_id" SERIAL NOT NULL,
	"pet_id" INT NOT NULL,
	"user_id" INT NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
    FOREIGN KEY ("pet_id") REFERENCES public.pet(pet_pk),
    FOREIGN KEY ("user_id") REFERENCES public.user(user_pk),
	CONSTRAINT "post_pk" PRIMARY KEY ("_id")
)