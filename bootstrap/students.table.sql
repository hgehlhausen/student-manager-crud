BEGIN;

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name_first varchar,
    name_last varchar,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

COMMIT;