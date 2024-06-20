-- Tao bang cart
CREATE TABLE CART (
    id  bigserial NOT NULL PRIMARY KEY UNIQUE,
    user_id BIGINT NOT NULL,
    product_list JSONB NOT NULL,
    is_active BOOLEAN not null default TRUE,
    search_str VARCHAR(255)
)