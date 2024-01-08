

//Tạo dsnv:
var dsnv = [];

var dataJson = localStorage.getItem("DSNV");
var arrayNv = JSON.parse(dataJson);

//*.Reload 
for (var i = 0; i < arrayNv.length; i++) {
    var data = arrayNv[i]
    var nv = new NhanVien(
        arrayNv[i].taiKhoan,
        arrayNv[i].ten,
        arrayNv[i].email,
        arrayNv[i].password,
        arrayNv[i].ngayLam,
        arrayNv[i].luongCB,
        arrayNv[i].chucVu,
        arrayNv[i].gioLam,
    );
    dsnv.push(nv);
}
renderDSNV();

//*I. Thêm nhân viên:
function btnThemNV() {
    var nv = getData();
    dsnv.push(nv);

    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJson);

    renderDSNV();
}

//*II. Xóa nhân viên:
function xoaNv(id) {
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].taiKhoan == id) {
            index = i;
        }
    }

    dsnv.splice(index, 1);
    // localStorage.clear();
    renderDSNV();
}

//*III. Cập nhật nhân viên:
function capNhatNv(id) {
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].taiKhoan == id) {
            index = i;
        };
    }
    //Từ index, lấy ra nv được click
    var nv = dsnv[index];

    document.getElementById('tknv').value = nv.taiKhoan;
    document.getElementById('name').value = nv.ten;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.password;
    document.getElementById('datepicker').value = nv.ngayLam;
    document.getElementById('luongCB').value = nv.luongCB;
    document.getElementById('chucVu').value = nv.chucVu;
    document.getElementById('gioLam').value = nv.gioLam;
}

function btnCapNhat() {
    var nv = getData();
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].taiKhoan == nv.taiKhoan) {
            index = i;
        }
    }
    //Cập nhật data tại vị trí index
    dsnv[index] = nv;
    renderDSNV();
}

