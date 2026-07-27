"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicinesController = void 0;
const medicines_service_1 = require("./medicines.service");
const getAllMedicines = async (req, res, next) => {
    try {
        const result = await medicines_service_1.medicinesService.getAllMedicines(req.query);
        res.status(200).json({
            success: true,
            message: "Medicines retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMedicineById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await medicines_service_1.medicinesService.getMedicineById(id);
        res.status(200).json({
            success: true,
            message: "Medicine retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.medicinesController = {
    getAllMedicines,
    getMedicineById
};
//# sourceMappingURL=medicines.controller.js.map