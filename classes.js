var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassUser = /** @class */ (function () {
    function ClassUser(props) {
        this.name = props.name;
        this.surname = props.surname;
        this.secretMessage = "".concat(props.name, " secret message");
    }
    ClassUser.prototype.printFullName = function () {
        return "".concat(this.name, " ").concat(this.surname);
    };
    return ClassUser;
}());
var ClassCustomer = /** @class */ (function (_super) {
    __extends(ClassCustomer, _super);
    function ClassCustomer(props) {
        var _this = _super.call(this, {
            name: props.name,
            surname: props.surname
        }) || this;
        _this.bill = props.bill;
        return _this;
    }
    ClassCustomer.prototype.getBill = function () {
        return "".concat(this.secretMessage, " ").concat(this.bill);
    };
    return ClassCustomer;
}(ClassUser));
var newUser = new ClassUser({
    name: 'Ira',
    surname: 'Stefan'
});
console.log(newUser.printFullName());
var newCustomer = new ClassCustomer({
    name: 'Ira',
    surname: 'Stefan',
    bill: 75764
});
console.log(newCustomer.getBill());
