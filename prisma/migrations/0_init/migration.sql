-- CreateTable
CREATE TABLE "mercy_parkour_codes" (
    "Map_Number" SERIAL NOT NULL,
    "Map" TEXT,
    "Code" TEXT NOT NULL,
    "Checkpoints" INTEGER,
    "Video" TEXT,
    "Notes" TEXT,
    "Author" TEXT,
    "Difficulty" TEXT,
    "Sit" TEXT,
    "Cloud" TEXT,
    "Stuck_Balance" TEXT,
    "Softlock" TEXT,
    "Many_Orbs" TEXT,

    CONSTRAINT "mercy_parkour_codes_pkey" PRIMARY KEY ("Code")
);

-- CreateTable
CREATE TABLE "daily_codes" (
    "id" BIGSERIAL NOT NULL,
    "date" DATE NOT NULL,
    "Map_Number" INTEGER NOT NULL,

    CONSTRAINT "daily_code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mercy_parkour_codes_Map_Number_key" ON "mercy_parkour_codes"("Map_Number");

-- CreateIndex
CREATE UNIQUE INDEX "daily_code_date_key" ON "daily_codes"("date");

-- AddForeignKey
ALTER TABLE "daily_codes" ADD CONSTRAINT "daily_code_Map_Number_fkey" FOREIGN KEY ("Map_Number") REFERENCES "mercy_parkour_codes"("Map_Number") ON DELETE NO ACTION ON UPDATE NO ACTION;

