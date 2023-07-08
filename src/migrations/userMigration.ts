import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
export class User implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'phone',
            type: 'string'
        }))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        // reverts things made in "up" method
    }
}