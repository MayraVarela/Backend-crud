module.exports = {
  components: {
    securitySchemes: {
        basicAuth:{
          type: "http",
          scheme: "basic",
        }
    },
    schemas: {
      Product: {
        type: "object",
        properties: {
          _id: {
            type: "ObjectId",
            description: "Product identification number",
            example: "65db1bd4e4c4dcf5df829b1d",
          },
          name: {
            type: "string",
            required: true,
            description: "The name of the product",
            example: "Mocasines - ROSA",
          },
          description: {
            type: "string",
            required: true,
            description: "The description of the product",
            example: "Un par de mocasines coloridos de antelina para un look chic, tira ancha de fantasía en la parte delantera, suela de goma antideslizante, punta redonda, tacón mini de 1,5 cm aproximadamente",
          },
          image: {
            type: "string",
            required: true,
            description: "The URL of the product image",
            example: "<URL of an image>",
          },
          size: {
            type: "string",
            required: true,
            enum: ["XS", "S", "M", "L", "XL"],
            description: "The size of the product",
            example: "L",
          },
          price: {
            type: "string",
            required: true,
            description: "The price of the product",
            example: "20",
          },
          category: {
            type: "string",
            required: true,
            enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
            description: "The category of the product",
            example: "Zapatos",
          },
        },
      },
      _id: {
        type: "ObjectId",
        description: "task identification number",
        example: "65db1bd4e4c4dcf5df829b1d",
      },
      ProductForm: {
        type: "object",
        properties: {
          name: {
            type: "string",
            required: true,
            description: "The name of the product",
            example: "Mocasines - ROSA",
          },
          description: {
            type: "string",
            required: true,
            description: "The description of the product",
            example: "Un par de mocasines coloridos de antelina para un look chic, tira ancha de fantasía en la parte delantera, suela de goma antideslizante, punta redonda, tacón mini de 1,5 cm aproximadamente",
          },
          category: {
            type: "string",
            required: true,
            enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
            description: "The category of the product",
            example: "Zapatos",
          },
          size: {
            type: "string",
            required: true,
            enum: ["XS", "S", "M", "L", "XL"],
            description: "The size of the product",
            example: "S",
          },
          price: {
            type: "string",
            required: true,
            description: "The price of the product",
            example: "15",
          },
          image: {
            type: "string",
            required: true,
            description: "The URL of the product image",
            example: "<URL of an image>",
          },
        },
      },
    },
  },
};
  