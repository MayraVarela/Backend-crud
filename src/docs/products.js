module.exports = {
  paths: {
    "/api/products": {
      get: {
        tags: ["Client"],
        summary: "Gets all products",
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product"
                }
              }
            }
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/products/{productId}": {
      get: {
        tags: ["Client"],
        summary: "Gets a product by ID",
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of the product to retrieve",
            schema: {
              $ref: "#/components/schemas/_id"
            }
          }
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product"
                }
              }
            }
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/category/{category}": {
      get: {
        tags: ["Client"],
        summary: "Gets products by category",
        parameters: [
          {
            name: "category",
            in: "path",
            description: "Category to filter products",
            required: true,
            schema: {
              enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
            }
          }
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Product"
                  }
                }
              }
            }
          },
          404: {
            description: "No products found in this category"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/dashboard": {
      get: {
        tags: ["Admin"],
        summary: "Shows dashboard with all products",
        security: [
          {
            basicAuth: []
          }
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                    $ref: "#/components/schemas/Product"
                }
              }
            }
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/dashboard/{productId}": {
      get: {
        tags: ["Admin"],
        summary: "Gets a product by ID",
        security: [
          {
            basicAuth: []
          }
        ],
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of the product to retrieve",
            schema: {
              $ref: "#/components/schemas/_id"
            }
          }
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product"
                }
              }
            }
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/dashboard/new": {
      post: {
        tags: ["Admin"],
        summary: "Creates a new product",
        security: [
          {
            basicAuth: []
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductForm"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Product created successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductForm"
                }
              }
            }
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/dashboard/{productId}/edit": {
      get: {
        tags: ["Admin"],
        summary: "Shows edit product form in dashboard",
        security: [
          {
            basicAuth: []
          }
        ],
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of the product to edit",
            required: true,
            schema: {
               type: "string"
            }
          }
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductForm"
                }
              }
            }
          },
          404: {
            description: "Product not found"
          },
          500: {
             description: "Internal server error"
          }
        }
      },
      post: {
        tags: ["Admin"],
        summary: "Edits a product",
        security: [
          {
            basicAuth: []
          }
        ],
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of the product to edit",
            required: true,
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductForm"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Product edited successfully",
            content: {
              "multipart/form-data": {
                schema: {
                  $ref: "#/components/schemas/ProductForm"
                }
              }
            }
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/dashboard/{productId}/delete": {
      post: {
        tags: ["Admin"],
        summary: "Deletes a product",
        security: [
          {
            basicAuth: []
          }
        ],
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of the product to delete",
            required: true,
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          200: {
            description: "Product deleted successfully",
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    }
  }
};