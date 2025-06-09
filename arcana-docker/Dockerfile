# Usa imagem oficial do Tomcat com Java 21
FROM tomcat:10.1-jdk21

# Remove aplicação padrão
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copia sua aplicação WAR e renomeia para ROOT
COPY Arcana_.war /usr/local/tomcat/webapps/Arcana_.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
