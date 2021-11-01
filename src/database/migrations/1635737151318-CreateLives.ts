import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLives1635737151318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Lives",
                columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "nameLive",
                    type: "varchar",
                },
                {
                    name: "nameChannel",
                    type: "varchar"
                },
                {
                    name: "urlLive",
                    type: "varchar",
                },
                {
                    name: "dateLive",
                    type: "date"
                },
                {
                    name: "hourLive",
                    type: "time"
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Lives");
    }

}
