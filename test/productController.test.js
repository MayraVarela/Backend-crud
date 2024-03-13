const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const Product = require('../src/models/Product');
const cheerio = require('cheerio');
require('dotenv').config();

describe('Pruebas sobre la API de productos', () => {
    beforeAll(async () => {
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        
        await mongoose.disconnect();
    });

    describe('GET /products', () => {
        let response;

        beforeEach(async () => {
            
            response = await request(app).get('/products').send();
            products = await Product.find();
        });

        it('La ruta funciona correctamente', async () => {
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/html/);
        });

        it('La petición muestra el html correcto', async () => {
            
            const itemCardElements = response.text.match(/<div class="item-card"/g);
            expect(itemCardElements.length).toBe(products.length);
        });
    });

    describe('GET /products/:id', () => {
        it('La ruta funciona correctamente', async () => {

            const mockProduct = {
                _id: 'mockId',
                name: 'Mock Product',
                description: 'Mock Description',
                image: 'mockImageUrl',
                category: 'Camisetas',
                size: 'M',
                price: 10,
            };
            jest.spyOn(Product, 'findById');
            Product.findById.mockResolvedValue(mockProduct);
            const response = await request(app).get('/products/mockId').send();

            
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
        expect(Product.findById).toHaveBeenCalledWith('mockId');
        expect(response.text).toContain(mockProduct.name);
        });
    });
    describe('GET /category/:category', () => {
        it('La ruta funciona correctamente', async () => {
            // Mock de la categoría que se espera obtener
            const mockCategory = 'Camisetas';
    
            // Crear un mock del modelo Product
            jest.spyOn(Product, 'find');
    
            // Productos simulados que se esperan encontrar en la categoría
            const mockProducts = [
                {
                    _id: 'mockId1',
                    name: 'Camiseta Roja',
                    category: 'Camisetas',
                    price: 15,
                },
                {
                    _id: 'mockId2',
                    name: 'Camiseta Azul',
                    category: 'Camisetas',
                    price: 20,
                },
            ];
    
            
            Product.find.mockResolvedValue(mockProducts);
    
            const response = await request(app).get('/category/Camisetas').send();

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/html/);
            expect(Product.find).toHaveBeenCalledWith({ category: mockCategory });
            const $ = cheerio.load(response.text);
            const productElements = $('.item-card');
            expect(productElements.length).toBe(mockProducts.length);
        });
    });
    // Crear un mock para el módulo 'multer'
    jest.mock('multer', () => {
    return {
        single: jest.fn(() => (req, res, next) => {
            req.file = {
                // Mock del archivo cargado
                fieldname: 'image',
                originalname: 'test-image.jpg',
                encoding: '7bit',
                mimetype: 'image/jpeg',
                buffer: Buffer.from([8, 6, 7, 5, 3, 0, 9]),
                size: 7
            };
            next();
        })
    };
});

});
