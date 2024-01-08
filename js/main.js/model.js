
//Tạo lớp đối tượng
function NhanVien(taiKhoan, ten, email, password, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function () {
        return ('$' + this.luongCB);
    };
}