docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursavaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursavaya-java/app ../../..
