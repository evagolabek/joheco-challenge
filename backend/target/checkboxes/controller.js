"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let checkboxController = class checkboxController {
    async allcheckboxes() {
        const checkboxes = await entity_1.default.find();
        return { checkboxes };
    }
    async updatecheckbox(id, update) {
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        console.log(id, update);
        const checkbox = await entity_1.default.findOne(id);
        if (!checkbox)
            throw new routing_controllers_1.NotFoundError('Cannot find checkbox');
        return entity_1.default.merge(checkbox, update).save();
    }
};
__decorate([
    routing_controllers_1.Get('/checkboxes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], checkboxController.prototype, "allcheckboxes", null);
__decorate([
    routing_controllers_1.Put('/checkboxes/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], checkboxController.prototype, "updatecheckbox", null);
checkboxController = __decorate([
    routing_controllers_1.JsonController()
], checkboxController);
exports.default = checkboxController;
//# sourceMappingURL=controller.js.map