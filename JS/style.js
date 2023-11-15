/*** Tính tiền taxi
 * B1: nhập số km
 * b2 : xử lý:
 * var tientaxi=20000
 * var tongtien=0;
 *
 * so km >1 --> 20 000
 * tongtien= sokm*20000
 *
 *
 * */
function calcElecBill() {
  var submitPower = document.getElementById("submitPower");
  submitPower = document.onclick = function () {
    var nameChuHo = document.getElementById("nameChuHo").value;
    var kwTrongThang = document.getElementById("kwTrongThang").value * 1;

    let fare = 0;
    const firstOpeningPrice = 1678;
    const price50KConts = 1.734; //2
    const price100kwConts = 2014; //3
    const price100kwConts200 = 2536; //4
    const price100kwConts300 = 2919; //5
    const price100kwConts401 = 3015; //6
    var TAX = 10 / 100;
    var TienThue;
    //   if(kwTrongThang>0){
    //     alert("bạn nhập oki")
    //   }(kwTrongThang <= 0 && kwTrongThang <= 50) {
    //     fare =
    //       kwTrongThang * firstOpeningPrice * TAX + kwTrongThang * firstOpeningPrice;
    //     console.log("Giá tiền", fare);
    //   } else if (kwTrongThang >= 51 && kwTrongThang <= 100) {
    //     fare =
    //       50 * firstOpeningPrice +
    //       (kwTrongThang - 50) * 1533 +
    //       (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533) * TAX;
    //     console.log("Giá tiền", fare);
    //   }
    //   } else if (kwTrongThang >= 101 && kwTrongThang <= 200) {
    //     fare =
    //       50 * firstOpeningPrice +
    //       50 * price50KConts +
    //       (kwTrongThang - 100) * price100kwConts * TAX +
    //       50 * firstOpeningPrice +
    //       50 * price50KConts +
    //       (kwTrongThang - 100) * price100kwConts;
    //     console.log("Giá tiền", fare);
    //   } else if (kwTrongThang >= 201 && kwTrongThang <= 300) {
    //     fare =
    //       50 * firstOpeningPrice +
    //       50 * price50KConts +
    //       100 * price100kwConts +
    //       (kwTrongThang - 200) * price100kwConts200 +
    //       (50 * firstOpeningPrice +
    //         50 * price50KConts +
    //         100 * price100kwConts +
    //         (kwTrongThang - 200) * price100kwConts200 * TAX);
    //     console.log("Giá tiền", fare);
    //   } else if (kwTrongThang >= 301 && kwTrongThang <= 400) {
    //     fare =
    //       50 * firstOpeningPrice +
    //       50 * price50KConts +
    //       100 * price100kwConts +
    //       (kwTrongThang - 300) * price100kwConts300 +
    //       (50 * firstOpeningPrice +
    //         50 * price50KConts +
    //         100 * price100kwConts +
    //         (kwTrongThang - 300) * price100kwConts300 * TAX);
    //     console.log("Giá tiền", fare);
    //   } else if (kwTrongThang >= 401) {
    //     fare =
    //       50 * firstOpeningPrice +
    //       50 * price50KConts +
    //       100 * price100kwConts +
    //       100 * price100kwConts300 +
    //       (kwTrongThang - 400) * price100kwConts401 +
    //       (50 * firstOpeningPrice +
    //         50 * price50KConts +
    //         100 * price100kwConts +
    //         100 * price100kwConts300 +
    //         (kwTrongThang - 400) * price100kwConts401 * TAX);
    //   }
    // }
    if (Number.isNaN(kwTrongThang)) {
      alert("Bạn đã nhập sai , vui lòng nhập số");
    } else if (kwTrongThang < 50) {
      TienThue = kwTrongThang * firstOpeningPrice * TAX;

      fare =
        kwTrongThang * firstOpeningPrice * TAX +
        kwTrongThang * firstOpeningPrice +
        TienThue;
      console.log("Giá tiền", fare);
    } else if (kwTrongThang >= 50 && kwTrongThang <= 100) {
      TienThue =
        50 * firstOpeningPrice +
        (kwTrongThang - 50) * 1533 +
        (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533) * TAX;
      console.log("Tien Thue ", TienThue);
      fare =
        TienThue +
        50 * firstOpeningPrice +
        (kwTrongThang - 50) * 1533 +
        (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533);
      console.log("Giá tiền", fare);
    } else if (kwTrongThang >= 101 && kwTrongThang <= 200) {
      TienThue =
        50 * firstOpeningPrice +
        50 * price50KConts +
        (kwTrongThang - 100) * price100kwConts * TAX;
      fare =
        TienThue +
        50 * firstOpeningPrice +
        50 * price50KConts +
        (kwTrongThang - 100) * price100kwConts;
      console.log("Giá tiền", fare);
    } else if (kwTrongThang >= 201 && kwTrongThang <= 300) {
      TienThue =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        (kwTrongThang - 200) * price100kwConts200 * TAX;
      fare =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        (kwTrongThang - 200) * price100kwConts200 +
        TienThue;
      console.log("Giá tiền", fare);
    } else if (kwTrongThang >= 301 && kwTrongThang <= 400) {
      TienThue =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        (kwTrongThang - 300) * price100kwConts300 * TAX;
      fare =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        (kwTrongThang - 300) * price100kwConts300 +
        TienThue;
      console.log("Giá tiền", fare);
    } else if (kwTrongThang >= 401) {
      TienThue =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        100 * price100kwConts300 +
        (kwTrongThang - 400) * price100kwConts401 * TAX;
      fare =
        50 * firstOpeningPrice +
        50 * price50KConts +
        100 * price100kwConts +
        100 * price100kwConts300 +
        (kwTrongThang - 400) * price100kwConts401 +
        TienThue;
    }

    // Convert VND
    const config = { style: "currency", currency: "VND" };
    const formated = new Intl.NumberFormat("vi-VN", config);

    var result = "";
    result += "<p>Tiền điện tháng này phải trả là:</p>";
    result += "<p>Thông tin khách hàng: " + nameChuHo + "</p>";
    result += "<p>Số KW bạn đã sử dụng là: " + kwTrongThang + "</p>";
    result +=
      "<p> Tổng tiền của bạn phải trả : " + formated.format(fare) + "</p>";
    result += "<p>Tiền thuế của bạn là: " + formated.format(TienThue) + " </p>";
    result += " <p> Thuế suất %: " + TAX + "</p>";

    var footerPower = document.getElementById("footerPower");
    footerPower.innerHTML = result;
  };
}
/**Điểm chuẩn trường
 * B1: nhập điểm chuẩn trường
 * nhập điểm môn 1, môn 2, môn 3;
 * nhập đối tượng, nhập điểm ưu tiên
 * b2: Xử lý:
 * diem1 || diem 2, diem 3 #0
 *điểm
 * *
 * * * */
function tongDiemTC(diem1, diem2, diem3, diemKv, diemDoiTuong) {
  var tong = 0;
  tong = Number(diem1 + diem2 + diem3 + diemKv + diemDoiTuong);
  console.log("tong", tong);
  return tong;
}
function tinhDiemTrungBinh(diem1, diem2, diem3) {
  var dtb = 0;
  dtb = (Number(diem1) + Number(diem2) + Number(diem3)) / 3;
  // output diem trung binh
  console.log("Dtb ", dtb);
  return dtb; //8
  //sau lễnh return chương trình sẽ dừng
}
var type2 = "";
// var TC = 0;
function SoSanhDiem(a, b, c, d, e) {
  if (a == 0 || b == 0 || c == 0) {
    type2 = "Bạn rớt: ";
    console.log("KQ", type2);
    return false;
  } else if (d >= e) {
    type2 = "Bạn đỗ: ";
  }
}
document.getElementById("submitMark").onclick = function () {
  var markSchool = Number(document.getElementById("markSchool").value);
  var markOne = Number(document.getElementById("markOne").value);
  var markTwo = Number(document.getElementById("markTwo").value);
  var markThree = Number(document.getElementById("markThree").value);
  var diemTrungBinh = tinhDiemTrungBinh(markOne, markTwo, markThree);
  var selKhuVuc = Number(document.getElementById("selKhuVuc").value);
  var selDoiTuong = Number(document.getElementById("selDoiTuong").value);
  var tongDiem = 0;
  tongDiem = tongDiemTC(markOne, markTwo, markThree, selDoiTuong, selKhuVuc);
  console.log("Tong diem: ", tongDiem);
  // console.log("Khu vực ", selKhuVuc);
  // console.log("Doi tuong : ", selDoiTuong);
  var type3 = SoSanhDiem(markOne, markTwo, markThree, tongDiem, markSchool);

  document.getElementById("footerMark").innerHTML = type2 + " " + tongDiem;
  //     "Tổng điểm bạn đạt được: " + tongDiem;
  // if (markOne === 0 || markTwo === 0 || markThree === 0) {
  //   document.getElementById("footerMark").innerHTML =
  //     "Tổng điểm bạn đạt được: " + tongDiem;
  //   document.getElementById("footerMark").innerHTML =
  //     "Kết quả: Bạn thi trượt do môn thi có điểm liệt ";
  // } else if (tongDiem >= markSchool) {
  //   document.getElementById("footerMark").innerHTML =
  //     "Chúc mừng bạn đã đỗ ^_^ " + tongDiem;
  // } else {
  //   document.getElementById("footerMark").innerHTML =
  //     "Bạn không đậu gòi :((  " + tongDiem;
  // }
};
// tiền TAX
/** 
 * b1: nhập thong tin khách hàng
 * nhập tổng thu nhạp 
 * số người phụ thuộc
 * b2 :
 - Xử lý
  thuNhapChiuThue = thuNhap - 4 - phuThuoc * 1.6 ;

  if (thuNhapChiuThue <= 60) {
    tienThue = thuNhapChiuThue * 0.05 ;
  } else if (60 < thuNhapChiuThue && thuNhapChiuThue <= 120) {
    tienThue = thuNhapChiuThue * 0.1 ;
  } else if (120 < thuNhapChiuThue && thuNhapChiuThue <= 210) {
    tienThue = thuNhapChiuThue * 0.15 ;
  } else if (210 < thuNhapChiuThue && thuNhapChiuThue <= 384) {
    tienThue = thuNhapChiuThue * 0.2 ;
  } else if (384 < thuNhapChiuThue && thuNhapChiuThue <= 624) {
    tienThue = thuNhapChiuThue * 0.25 ;
  } else if (624 < thuNhapChiuThue && thuNhapChiuThue <= 960) {
    tienThue = thuNhapChiuThue * 0.3 ;
  } else {
    tienThue = thuNhapChiuThue * 0.35 ;
  }

 * */
var tienPhuthuoc = 4e6;
var chiuThue60 = 60000000;
var chiuThue120 = 120000000;
var chiuThue210 = 210000000;
var chiuThue384 = 384000000;
var chiuThue624 = 624000000;
var chiuThue960 = 960000000;

var tax60 = 5 / 100;
var tax60To120 = 10 / 100;
var tax120To210 = 15 / 100; //90;
var tax210T0384 = 20 / 100; //174
var tax384To624 = 25 / 100; //240
var tax624To960 = 30 / 100; //336
var taxUpper960 = 35 / 100;

// tien thue dưới 60 triệu
function tienThueBac1(money, tax) {
  return money * tax;
}
function tienThueBac2(money, tax) {
  return (money - chiuThue60) * tax;
}
function tienThueBac3(money, tax) {
  return (money - chiuThue120) * tax;
}
function tienThueBac4(money, tax) {
  return (money - chiuThue210) * tax;
}
function tienThueBac5(money, tax) {
  return (money - chiuThue384) * tax;
}
function tienThueBac6(money, tax) {
  return (money - chiuThue624) * tax;
}
function tienThueBac7(money, tax) {
  return (money - chiuThue960) * tax;
}

var submitTAX = document.getElementById("submitTAX");
submitTAX.onclick = function () {
  const config = { style: "currency", currency: "VND" };
  const formated = new Intl.NumberFormat("vi-VN", config);
  var result = "";
  var nameCustom = document.getElementById("nameCustom").value;
  var total12Months = document.getElementById("total12Months").value * 1;
  var namePhuThuoc = document.getElementById("namePhuThuoc").value * 1;

  namePhuThuoc *= 1.6e6;
  giamGiaCanh = tienPhuthuoc + namePhuThuoc;
  // console.log("Gia cảnh", giamGiaCanh);
  var thuNhapChiuThue = 0;
  thuNhapChiuThue = total12Months - giamGiaCanh;
  console.log(
    "Tiền thuế phải nộp sau khi giảm gia cảnh là: ",
    formated.format(thuNhapChiuThue)
  );
  console.log("so tien", namePhuThuoc);
  let taxChiuThue = 0;
  console.log(nameCustom, namePhuThuoc, total12Months);
  if (thuNhapChiuThue <= chiuThue60) {
    // taxChiuThue = thuNhapChiuThue * 0.05;
    taxChiuThue = tienThueBac1(thuNhapChiuThue, tax60);
  } else if (chiuThue60 < thuNhapChiuThue && thuNhapChiuThue < chiuThue120) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      tienThueBac2(thuNhapChiuThue, tax60To120); //thuNhapChiuThue * 0.05 + (thuNhapChiuThue - chiuThue60) * 0.1;
  } else if (chiuThue120 < thuNhapChiuThue && thuNhapChiuThue <= chiuThue210) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      thuNhapChiuThue * 0.05 +
      tienThueBac2(thuNhapChiuThue, tax60To120) +
      tienThueBac3(thuNhapChiuThue, tax120To210);
    // 90tr
  } else if (chiuThue210 < thuNhapChiuThue && thuNhapChiuThue <= chiuThue384) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      tienThueBac2(thuNhapChiuThue, tax60To120) +
      tienThueBac3(thuNhapChiuThue, tax120To210) +
      tienThueBac4(thuNhapChiuThue, tax210T0384);
  } else if (chiuThue384 < thuNhapChiuThue && thuNhapChiuThue <= chiuThue624) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      tienThueBac2(thuNhapChiuThue, tax60To120) +
      tienThueBac3(thuNhapChiuThue, tax120To210) +
      tienThueBac4(thuNhapChiuThue, tax210T0384) +
      tienThueBac5(thuNhapChiuThue, tax384To624);
  } else if (chiuThue624 < thuNhapChiuThue && thuNhapChiuThue <= chiuThue960) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      tienThueBac2(thuNhapChiuThue, tax60To120) +
      tienThueBac3(thuNhapChiuThue, tax120To210) +
      tienThueBac4(thuNhapChiuThue, tax210T0384) +
      tienThueBac5(thuNhapChiuThue, tax384To624) +
      tienThueBac6(thuNhapChiuThue, tax624To960);
  } else if (thuNhapChiuThue >= chiuThue960) {
    taxChiuThue =
      tienThueBac1(thuNhapChiuThue, tax60) +
      tienThueBac2(thuNhapChiuThue, tax60To120) +
      tienThueBac3(thuNhapChiuThue, tax120To210) +
      tienThueBac4(thuNhapChiuThue, tax210T0384) +
      tienThueBac5(thuNhapChiuThue, tax384To624) +
      tienThueBac6(thuNhapChiuThue, tax624To960) +
      tienThueBac7(thuNhapChiuThue, taxUpper960);
  }

  console.log("Tiền thuế bạn phải nộp: ", formated.format(taxChiuThue));
  // KQ TAX
  result += "<p>Tien thue cua ban</p>";
  result +=
    "<p>Tien thu nhap mot nam la:" + formated.format(total12Months) + "</p>";
  result += "<p>Số người phụ thuộc:" + formated.format(namePhuThuoc) + "</p>";
  result += "<p>tiền phụ thuộc :" + formated.format(giamGiaCanh) + "</p>";
  result +=
    "<p>Tiền thuế bạn cần đóng là:" + formated.format(taxChiuThue) + "</p>";
  result += "<p>Tiền thuế bạn là:" + formated.format(thuNhapChiuThue) + "</p>";
  var footerTAX = document.getElementById("footerTAX");
  footerTAX.innerHTML = result;
};
// tiền cáp
var phiXuly = 4.5;
var phiDVCB = 20.5;
var thueCCND = 7.5;
var thueCCDN = 50;
var phiThueKenhCaoCap;
var KQ;
var cpKN;

document.getElementById("submitTraTienCap").onclick = function () {
  var numberCon = Number(document.getElementById("numberCon").value);
  var numberPrem = Number(document.getElementById("numberPrem").value);
  var maKH = document.getElementById("numberCustomer").value;
  var selKh = document.getElementById("selKh").value;
  console.log("so ket noi ", numberCon);
  console.log("ket noi prem ", numberPrem);
  console.log("ma khach hang ", maKH);
  console.log("đối tượng khách hàng: ", selKh);
  var cpKN = 0;
  var tong = 0;

  if (selKh == 2) {
    // cpKN = chiPhiND(phiXuly, phiDVCB, thueCCND, numberPrem);
    cpKN = phiXuly + phiDVCB + thueCCND * numberPrem;
    console.log("chi phi ket noi: ", cpKN);
    // ThueKenhCaoCap = 7.5;
    // phiThueKenhCaoCap = 7.5 * numberPrem;
  } else if (numberCon <= 10) {
    cpKN = 15 + 75 + 50 * numberPrem;

    // phiThueKenhCaoCap = 7.5 * numberPrem;
    // phiThueKenhCaoCap = dvKenhCaoCap(ThueKenhCaoCap2 * numberPrem);
  } else {
    cpKN = 15 + 75 + (numberCon - 10) * 5 + thueCCDN * numberPrem;
  }
  document.getElementById("footerTraTienCap").innerHTML =
    "Chi Phí Kết Nối Quý  Khách: " +
    " \n Mã thuê bao" +
    " " +
    maKH +
    " " +
    cpKN +
    " $";
};

function myFunction() {
  var selKh = document.getElementById("selKh").value;
  if (selKh == "Nha_Dan") {
    document.getElementById("numberCon").disabled = true;
  } else {
    document.getElementById("numberCon").disabled = false;
  }
}
