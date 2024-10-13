-- DropForeignKey
ALTER TABLE `continuousperformancetask` DROP FOREIGN KEY `ContinuousPerformanceTask_patientId_fkey`;

-- DropForeignKey
ALTER TABLE `stopsignaltask` DROP FOREIGN KEY `StopSignalTask_patientId_fkey`;

-- DropForeignKey
ALTER TABLE `strooptask` DROP FOREIGN KEY `StroopTask_patientId_fkey`;

-- AddForeignKey
ALTER TABLE `StroopTask` ADD CONSTRAINT `StroopTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContinuousPerformanceTask` ADD CONSTRAINT `ContinuousPerformanceTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StopSignalTask` ADD CONSTRAINT `StopSignalTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
