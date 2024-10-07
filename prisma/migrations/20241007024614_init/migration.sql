-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hasAdhd` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StroopTask` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `responseTime` DOUBLE NOT NULL,
    `correctAnswers` INTEGER NOT NULL,
    `errors` INTEGER NOT NULL,
    `patientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContinuousPerformanceTask` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reactionTime` DOUBLE NOT NULL,
    `omissionErrors` INTEGER NOT NULL,
    `commissionErrors` INTEGER NOT NULL,
    `patientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StopSignalTask` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reactionTime` DOUBLE NOT NULL,
    `correctResponses` INTEGER NOT NULL,
    `failures` INTEGER NOT NULL,
    `omittedArrows` INTEGER NOT NULL,
    `patientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StroopTask` ADD CONSTRAINT `StroopTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContinuousPerformanceTask` ADD CONSTRAINT `ContinuousPerformanceTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StopSignalTask` ADD CONSTRAINT `StopSignalTask_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
