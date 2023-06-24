-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "representante" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "docente" TEXT NOT NULL,

    CONSTRAINT "Evaluacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "estudiante_id" INTEGER NOT NULL,
    "evaluacion_id" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "nota_maxima" INTEGER NOT NULL,
    "nota_obtenida" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_identificacion_key" ON "Estudiante"("identificacion");

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_estudiante_id_fkey" FOREIGN KEY ("estudiante_id") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_evaluacion_id_fkey" FOREIGN KEY ("evaluacion_id") REFERENCES "Evaluacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
