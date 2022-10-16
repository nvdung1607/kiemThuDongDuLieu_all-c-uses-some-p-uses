export function danhHieu(hocLuc, hanhKiem) {        //1
    let result = 'khongCoDanhHieu'                  //2

    if (hocLuc >= 8.0 && hanhKiem == 'tot')         //3
         result = 'hocSinhGioi'                     //4
    else if (hocLuc >= 6.5 && hanhKiem == 'tot')    //5
        result = 'hocSinhTienTien'                  //6
    else if (hocLuc >= 6.5 && hanhKiem == 'kha')    //7
        result = 'hocSinhTienTien'                  //8
    else result =  'khongCoDanhHieu'                //9
    
    return result                                   //10
}



