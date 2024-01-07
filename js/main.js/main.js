
var dsnv = [];

var dataJson = localStorage.getItem("DSNV");
var arrayNv = JSON.parse(dataJson);

//Render
function renderDSNV() {
    var contentHTML = "";
    for (var i = 0; i < dsnv.length; i++) {
        var data = dsnv[i];
        var trString = `<tr>
                            <td>${data.taiKhoan}</td>
                            <td>${data.ten}</td>
                            <td>${data.email}</td>
                            <td>${data.ngayLam}</td>
                            <td>${data.chucVu}</td>
                            <td>${data.tongLuong()}</td>
                            <td>0</td>

                            <td> 
                            <button onclick="xoaNv('${data.taiKhoan}')" 
                            class = 'btn btn-danger'>Delete</button>
                            </td>
                        </tr>`;
        contentHTML += trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

//Lấy thông tin
function getData() {
    var taiKhoan = document.getElementById('tknv').value;
    var ten = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value * 1;
    var luongCB = document.getElementById('luongCB').value * 1;
    var chucVu = document.getElementById('chucVu').value;
    var gioLam = document.getElementById('gioLam').value * 1;

    var nv = {
        taiKhoan: taiKhoan,
        ten: ten,
        email: email,
        password: password,
        ngayLam: ngayLam,
        luongCB: luongCB,
        chucVu: chucVu,
        gioLam: gioLam,
        tongLuong: function () {
            return ('$' + this.luongCB);
        },
    };
    return nv;
}

//!I. Thêm nhân viên:
function btnThemNV() {
    var nv = getData();
    dsnv.push(nv);

    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV", dataJson);

    renderDSNV();
}

//!II. Xóa nhân viên:
function xoaNv(id) {
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].ma == id) {
            index = i;
        }
    }
    dsnv.splice(index, 1);
    renderDSNV();
}

//!III.Reload 
//B1: Tạo class object (Lớp đối tượng sinhvien)
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

//B2: Duyệt mảng => convert object từ local storage
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

//!IV. Chức năng cập nhật sinh viên:
function btnCapNhat(id) {
    var index;
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].ma == id) {
            index = i;
        }
    }

    //Từ index, lấy ra sv được click
    var nv = dsnv[index];
    //Show thông tin lên formdocument.getElementById('txtMaSV').value = 
    document.getElementById('tknv').value = nv.taiKhoan;
    document.getElementById('name').value = nv.ten;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.password;
    document.getElementById('datepicker').value = nv.ngayLam;
    document.getElementById('luongCB').value = nv.luongCB;
    document.getElementById('chucvu').value = nv.chucVu;
    document.getElementById('gioLam').value = nv.gioLam;
}

function capNhatNv() {
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