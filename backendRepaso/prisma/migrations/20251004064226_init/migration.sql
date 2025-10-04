-- DropForeignKey
ALTER TABLE `Prestamo` DROP FOREIGN KEY `fk_prestamo_libro`;

-- DropIndex
DROP INDEX `Prestamo_libroId_key` ON `Prestamo`;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `fk_prestamo_usuario` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
