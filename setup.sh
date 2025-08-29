
#!/bin/bash

# Create unique database name from request ID
DATABASE_NAME="cd71fc6c_32c2_4cd7_9179_c2ec3f1ddfbc"

# Project output directory
OUTPUT_DIR="/home/coder/project/workspace/question_generation_service/solutions/cd71fc6c-32c2-4cd7-9179-c2ec3f1ddfbc/springapp"

# Spring CLI command to generate project
# Dependencies: web (REST APIs), data-jpa (Entity/Repository), validation (input validation), mysql (database)
spring init \
  --type=maven-project \
  --language=java \
  --boot-version=3.4.0 \
  --packaging=jar \
  --java-version=17 \
  --groupId=com.examly \
  --artifactId=springapp \
  --name="Banking Transaction Management System" \
  --description="Spring Boot application for Banking Transaction Management System" \
  --package-name=com.examly.springapp \
  --dependencies=web,data-jpa,validation,mysql \
  --build=maven \
  ${OUTPUT_DIR}

# Wait for project generation to complete
sleep 5

# Create database
mysql -u root -pexamly -e "CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME};" 2>/dev/null || echo "Database creation failed, will use default"

# Configure application.properties
cat > "${OUTPUT_DIR}/src/main/resources/application.properties" << EOL
spring.datasource.url=jdbc:mysql://localhost:3306/${DATABASE_NAME}?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=examly
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
EOL
