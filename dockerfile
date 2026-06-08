# 1. Etapa de compilación (Build)
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar la aplicación (si aplica, ej. TypeScript, Next.js, etc.)
# RUN npm run build

# 2. Etapa de producción
FROM node:18-alpine

WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app .

# Puerto que expone la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
