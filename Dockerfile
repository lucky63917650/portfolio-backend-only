FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY . .

# Fix permission + line endings
RUN chmod +x mvnw && sed -i 's/\r$//' mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/portfolio-backend-only-0.0.1-SNAPSHOT.jar"]