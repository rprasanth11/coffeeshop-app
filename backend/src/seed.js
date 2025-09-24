import { query } from './db.js'

async function seed() {
  await query(`
    INSERT INTO products (name, description, price, image_filename) VALUES
      ('Cappuccino', 'Strong espresso with steamed milk foam', 160.00, 'cappuccino.jpg'),
      ('Latte', 'Mild espresso with lots of steamed milk', 150.00, 'latte.jpg'),
      ('Espresso', 'Shot of pure espresso', 120.00, 'espresso.jpg')
  `)
  console.log('Seeded products table ✅')
}

seed()
  .catch((e) => console.error(e))
  .finally(() => process.exit())
