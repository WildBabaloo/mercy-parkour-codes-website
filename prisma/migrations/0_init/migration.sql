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

