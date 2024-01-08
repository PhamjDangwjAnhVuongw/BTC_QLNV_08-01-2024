// 1.Render
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
                            class = 'btn btn-danger'>Xóa</button>

                            <button 
                            onclick="capNhatNv ('${data.taiKhoan}')" 
                            class = 'btn btn-warning mt-1'>Sửa</button></td>
                            </td>
                        </tr>`;
        contentHTML += trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

//2. Lấy thông tin
function getData() {
    var taiKhoan = document.getElementById('tknv').value;
    var ten = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCB = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucVu').value;
    var gioLam = document.getElementById('gioLam').value;

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