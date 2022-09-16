const TipsList = {
    capphep: [
        "Đường cẩm dừng, cấm đỗ, cấm đi do UBND cấp tỉnh cấp",
        "Xe quá khổ, quá tải do: cơ quán quản lý đường bộ có thẩm quyên cấp phép"
    ],
    nongdocon: [
        "Người điều khiến xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nông độ cồn: Bị nghiêm cấm"
    ],
    khoangcachantoan: [
        "35m nếu vận tốc lưu hành(V) = 60 (km/h)",
        "55m nếu 60<V<80",
        "70m nếu 80<V=100",
        "100m nếu 100<V<120",
        "Dưới 60km/h: Chủ động và đảm bảo khoảng cách."
    ],
    hoivetuoi: [
        "Tuổi tối đa hạng E: nam 55, nữ 50",
        "Tuổi lấy bãng lái xe (cách nhau 3 tuổi)",
        "Gắn máy: 16T (dưới 50cm3)",
        "Mô tô +B1+B2:18T",
        ",C,FB:21T",
        "D,FG:24T",
        "E,FD:27T",
    ],
    duongcaotoc: [
        "Không được quay đầu xe, không lùi, không vượt",
        "Không được vượt trên câu hẹp có một làn xe.",
        "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        "Cẩm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau."
    ],
    khongcoden: [
        "Có vòng xuyến: Nhường đường bên trái",
        "Không có vòng xuyến nhường bên phải"
    ],
    nienhansudung: [
        "25 năm: ô tô tải",
        "20 năm: ô tô chở người trên 9 chỗ"
    ],
    bienbaocam:  [
        "Cấm ô tô (Gồm: mõ tô 3 bánh, Xe Lam, xe khách) - -> Câm xe tải ~ Câẩm Máy kéo --> Cấm rơ moóc, sơ mi rơ moóc"
    ],
    bonuutien:  [
        "1. Nhất chớm: Xe nào chớm tới vạch trước thì được đi trước.",
        "2. Nhi ưu: Xe ưu tiên được đi trước. Thứ tự xe ưu tiên: Hỏa-Sự-An-Thương (Cứu hỏa - Quân sự - Công an - Cứu thương - Hộ đê - Đoàn xe tang).",
        "3. Tam đường: Xe ở đường chính, đường ưu tiên.",
        "4. Tứ hướng: Thứ tự hướng: Bên phải trông - Rẽ phải - Đi thẳng - Rẽ trái."
    ],
    thutuuutien: [
        "Hỏa: Xe Cứu hỏa",
        "Sự : Xe Quân sự",
        "An: Xe Công an",
        "Thương: Xe cứu thương",
        "Xe hộ đê, xe đi làm nhiệm vụ khẩn cấp",
        "Đoàn xe tang"
    ],
    cachanggplx: [
        "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật",
        "A2 mô tô 175 cm3 trở lên",
        "A3 xe mô tô 3 bánh",
        "B1 không hành nghề lái xe",
        "B1, B2 đến 9 chõ ngôi, xe tải dưới 3.500kg",
        "C đến 9 chỗ ngồi, xe trên 3.500kg",
        "D chở đến 30 người",
        "E chở trên 30 người.",
        "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc)",
        "FE: E + kéo (ô tô chở khách nối toa)"
    ],
    nhombienbaohieu: [
        "Biển nguy hiểm (hình tam giác vàng)",
        "Biển cấm (vòng tròn đỏ)",
        "Biến hiệu lệnh (vòng tròn xanh)",
        "Biển chỉ dẫn (vuông hoặc hình chữ nhật xanh)",
        "Biển phụ (vuông, chữ nhật trắng đen): Hiệu lực năm ở biến phụ khi có đặt biến phụ"
    ],
    tocdodongdan: [
        "60km/h: Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ giới trở lên",
        "50km/h: Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ giới"
    ],
    duongdoi: [
        "90km/h: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải <3.5 tấn.",
        "80km/h: Xe ô tô chở người trên 30 chô (trừ xe buýt), ô tô tải có trọng tải >3.5 tấn (trừ ô tô xitec).",
        "70km/h: Ô tô buýt, ô tô đầu kéo kéo sơ miỉ rơ mooc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).",
        "60km/h: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc."
    ],
    duonghaichiu: [
        "80kmv/h: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải s3.5 tấn.",
        "70km/h: Xe ô tô chở người trên 30 chỗ (trừ xe buýt), ô tô tải có trọng tải >3.5 tấn (trừ ô tô xitec).",
        "60km/h: Ô tô buýt, ô tô đầu kéo kéo sơ mỉ rơ mooc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).",
        "50km/h: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ö tô xi téc."
    ],
    tocdochophep: [
        "Xe máy chuyên dùng, xe gần máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc): 40km/h",
        "Tốc độ tối đa cho phép của các loại xe cơ giới, xe máy chuyên dùng trên đường cao tốc phải tuân thủ tốc độ tối đa, tốc độ tối thiểu và không vượt quá: 120km/h"
    ],
    tanggiamso: [
        'Tăng 1 Giảm 2 (giảm số chọn ý có từ “vù ga”)'
    ],
    phuongtienduongbo: [
        "Bao gôm phương tiện giao thông cơ giới đường bộ và phương tiện giao thông thô sơ đường bộ"
    ],
    thamgiaduongbo: [
        "Gồm phương tiện giao thông đường bộ và xe máy chuyên dùng"
    ],
    xemaychuyendung: [
        "Gôm xe máy thi công, xe máy nông nghiệp, lâm nghiệp và các loại xe đặc chủng khác sử dụng và mục đích quốc phòng, an ninh có tham gia giao thông đường bộ"
    ],
    hieulenhdieukhien: [
        "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi",
        "Giang ngang tay: Trái phải đi; Trước sau dừng",
        "Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển."
    ],
    khainiemquytac: [
        "Tất cả các câu có đáp án bị nghiêm cấm, không cho phép hoặc không được phép thì chọn đáp án đó.",
        "Tốc độ chậm đi về bên phải.",
        "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.",
        "Trong đô thị sử dụng đèn chiếu gần.",
        "Không được phép lắp đặt còi đèn không đúng thiết kế, trừ phi được chấp thuận của cơ quan có thẩm quyên.",
        "Xe mô tô không được kéo xe khác.",
        "05 năm không cấp lại nếu sử dụng bãng lái đã khai báo mất.",
        "Chuyển làn đường phái có tín hiệu báo trước.",
        "Xe thô sơ phải đi làn đường nên phải trong cùng.",
        "Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe lên dốc.",
        "Đứng cách ray đường sắt 5m.",
        "Vào cao tốc phải nhường đường cho xe đang chạy trên đường.",
        "Xe thiết kể nhỏ hơn 70km/h không được vào cao tốc",
        "Trên cao tốc chỉ được dừng xe, đỏ xe ở nơi quy định.",
        "Trong hầm chí được dừng xe, đổồ xe ở nơi quy định.",
        "Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.",
        "Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.",
        "Kéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        "Xe gần máy tối đa 40km/h.",
        "Xe cơ giới không bao gồm xe gắn máy.",
        "Đường có giải phân cách được xem là đường đôi.",
        "Giảm tốc độ, chú ý quan sát khi gặp biến báo nguy hiểm.",
        "Giảm tốc độ, đi sát vê bên phải khi xe sau xin vượt.",
        "Điểm giao cắt đường sắt thì ưu tiên đường sät.",
        "Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.",
        "Không vượt xe khác trên đường vòng, khuất tâm nhìn.",
        "Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.",
        "Dừng xe, đỗ xe cách lẽ đường, hè phố không quá 0,25 mét.",
        "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
        "Giảm tốc độ trên đường ướt, đường hẹp và đèo dốc.",
        "Xe buýt đang dừng đón trả khách thì giảm tốc độ và từ từ vượt qua xe buýt."
    ],
    nghiepvuxetai: [
        "Không lái xe liên tục quá 4 giờ.",
        "Không làm việc 1 ngày của lái xe quả 10 giờ.",
        "Người kinh doanh vận tải không được tự ý thay đổi vị trí đón trả khách.",
        "Vận chuyển hàng nguy hiểm phái có giấy phép."
    ],
    kythuatlaixe: [
        "Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau đế giảm tốc độ.",
        "Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.",
        "Thực hiện *phanh tay cần phải bóp khóa hãm đẩy cần phanh tay về phía trước.",
        "Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình.",
        "Thực hiện quay đầu xe với tốc độ thấp.",
        "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa."
    ],
    cautaosuachua: [
        "Yêu cầu của kính chần gió, chọn “Loại kính an toàn”.",
        "Âm lượng của còi là từ 90dB đến 115 dB.",
        "Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.",
        "Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
        "Động cơ 4 kỳ thì pít tỏng thực hiện 4 hành trình.",
        "Hệ thống bôi trơn giảm ma sát.",
        "Niên hạn ô tô trên 9 chỗ ngôi là 20 năm.",
        "Niên hạn ô tô tải là 25 năm.",
        "Động cơ ô tô biến nhiệt năng thành cơ năng.",
        "Hệ thống truyên lực truyền mô men quay từ động cơ tới bánh xe.",
        "Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
        "Hộp số ö tô đảm bảo chuyển động lùi.",
        "Hệ thống lái dùng để thay đổi hướng.",
        "Hệ thống phanh giúp giảm tốc độ.",
        "Ắc quy để tích trữ điện năng.",
        "Khởi động xe tự động phải đạp phanh."
    ],
    quytacsahinh: [
        "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiền - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thắng - rẽ trái.",
        "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.",
        "Xe xuống dốc phải nhường đường cho xe đang lên dốc"
    ]
}

const TIPS_DATA = [
    {
        title: 'Cấp phép',
        data: TipsList.capphep,
    },
    {
        title: 'Nồng độ cồn',
        data: TipsList.nongdocon,
    },
    {
        title: 'Khoảng cách an toàn tối thiểu',
        data: TipsList.khoangcachantoan,
    },
    {
        title: 'Hỏi về tuổi(T)',
        data: TipsList.hoivetuoi,
    },
    {
        title: 'Trên đường cao tốc, trong đường hầm, đường vòng, đầu dốc, nơi tầm nhìn hạn chế',
        data: TipsList.duongcaotoc,
    },
    {
        title: 'Tại nơi giao nhau không có tín hiệu đèn',
        data: TipsList.khongcoden,
    },
    {
        title: 'Niên hạn sử dụng (tính từ năm sx)',
        data: TipsList.nienhansudung,
    },
    {
        title: 'Biển báo cấm',
        data: TipsList.bienbaocam,
    },
    {
        title: 'Nhất chớm, nhìn ưu, tam đường, tứ hướng',
        data: TipsList.bonuutien,
    },
    {
        title: 'Thứ tự ưu tiên với xe ưu tiên: Hoả-Sự-An-Thương',
        data: TipsList.thutuuutien,
    },
    {
        title: 'Các hạng GPLX',
        data: TipsList.cachanggplx,
    },
    {
        title: 'Phân nhóm biển báo hiệu: bao gồm',
        data: TipsList.nhombienbaohieu,
    },
    {
        title: 'Tốc độ tối đa TRONG khu vực đông dân cư',
        data: TipsList.tocdodongdan,
    },
    {
        title: 'Tốc độ tối đa Ngoài khu vực đông dân cư (trừ đường cao tốc)',
        data: [],
    },
    {
        title: 'Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ giới trở lên',
        data: TipsList.duongdoi,
    },
    {
        title: 'Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ giới',
        data: TipsList.duonghaichiu,
    },
    {
        title: 'Tốc độ tối đa cho phép đối với',
        data: TipsList.tocdochophep,
    },
    {
        title: 'Tăng số, giảm số',
        data: TipsList.tanggiamso,
    },
    {
        title: 'Phương tiện giao thông đường bộ',
        data: TipsList.phuongtienduongbo,
    },
    {
        title: 'Phương tiện tham gia giao thông đường bộ',
        data: TipsList.thamgiaduongbo,
    },
    {
        title: 'Xe máy chuyên dùng',
        data: TipsList.xemaychuyendung,
    },
    {
        title: 'Hiệu lệnh người điều khiển giao thông',
        data: TipsList.hieulenhdieukhien,
    },
    {
        title: 'Khái niệm và quy tắc',
        data: TipsList.khainiemquytac,
    },
    {
        title: 'Nghiệp vụ xe tải',
        data: TipsList.nghiepvuxetai,
    },
    {
        title: 'Kỹ thuật lái xe',
        data: TipsList.kythuatlaixe,
    },
    {
        title: 'Cấu tạo và sửa chữa',
        data: TipsList.cautaosuachua,
    },
    {
        title: 'Các quy tắc sa hình khác',
        data: TipsList.quytacsahinh,
    } 
];

export default TIPS_DATA