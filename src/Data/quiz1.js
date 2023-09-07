const quiz1 = [
  {
    question:
      "Theo Hiến pháp 2013, Nước CHXHCN Việt Nam thực hiện nhất quán đường lối đối ngoại",
    image: "",
    choices: [
      "Độc lập, tự chủ, tự cường, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và cùng phát triển.",
      "Độc lập, dân chủ, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
    ],
    correct:
      "Độc lập, tự chủ, tự cường, hòa bình, hữu nghị, hợp tác và phát triển.",
    explanation: "",
  },

  {
    question:
      "1: Theo Hiến pháp 2013, Nước CHXHCN Việt Nam thực hiện nhất quán đường lối đối ngoại",
    choices: [
      "Độc lập, tự chủ, tự cường, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và cùng phát triển.",
      "Độc lập, dân chủ, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
    ],
    correct: "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
  },
  {
    question:
      "2: Theo hiến pháp năm 2013, Đảng Cộng sản Việt Nam: (KHOẢN 1 ĐIỀU 4 TRANG 2)",
    choices: [
      "Là lực lượng lãnh đạo Nhà nước và xã hội.",
      "Là tổ chức lãnh đạo Nhà nước và xã hội.",
      "Là đơn vị lãnh đạo Nhà nước và xã hội.",
      "Là lực lượng trung thành lãnh đạo Nhà nước và xã hội.",
    ],
    correct: "Là lực lượng lãnh đạo Nhà nước và xã hội.",
  },
  {
    question:
      "3: Theo Hiến pháp 2013, chủ thể nào tạo điều kiện để Mặt trận Tổ quốc Việt Nam các tổ chức thành viên của Mặt trận và các tổ chức xã hội khác hoạt động.",
    choices: [
      "Đảng Cộng sản Việt Nam.",
      "Chính phủ.",
      "Nhà nước.",
      "Quốc hội.",
    ],
    correct: "Nhà nước.",
  },
  {
    question:
      "4: Theo Hiến pháp 2013, chủ thể nào trình Quốc hội quyết định thành lập, bãi bỏ bộ, cơ quan ngang bộ",
    choices: [
      "Chủ tịch nước.",
      "Chủ tịch Quốc hội.",
      "Thủ tướng.",
      "Chính phủ.",
    ],
    correct: "Chính phủ.",
  },
  {
    question:
      "5: Theo Hiến pháp 2013, bầu, miễn nhiệm, bãi nhiệm Chủ tịch nước, Phó Chủ tịch nước là nhiệm vụ và quyền hạn của",
    choices: [
      "Thủ tướng Chính phủ.",
      "Ủy ban Thường vụ Quốc hội.",
      "Chủ tịch nước.",
      "Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "6: Đơn vị nào có trách nhiệm giải thích Hiến pháp, luật, pháp lệnh để làm rõ tinh thần, nội dung của điều, khoản, điểm trong Hiến pháp, luật, pháp lệnh để có nhận thức, thực hiện, áp dụng đúng, thống nhất pháp luật?",
    choices: [
      "Chính phủ.",
      "Quốc hội.",
      "Chủ tịch nước.",
      "Ủy ban thường vụ Quốc hội.",
    ],
    correct: "Ủy ban thường vụ Quốc hội.",
  },
  {
    question: "7: Theo Hiến pháp 2013, nhiệm kỳ của Chính phủ:",
    choices: [
      "Theo nhiệm kỳ của Quốc hội.",
      "05 năm.",
      "Theo nhiệm kỳ của Chủ tịch nước.",
      "06 năm.",
    ],
    correct: "Theo nhiệm kỳ của Quốc hội.",
  },
  {
    question:
      "8: Theo Hiến pháp năm 2013, Thủ tướng Chính phủ có mấy nhiệm vụ và quyền hạn?",
    choices: ["6", "7", "8", "9"],
    correct: "6",
  },
  {
    question:
      "9: Theo Hiến pháp 2013, Quyết định chính sách dân tộc, chính sách tôn giáo của Nhà nước là nhiệm vụ và quyền hạn của",
    choices: [
      "Thủ tướng Chính phủ.",
      "Ủy ban Thường vụ Quốc hội.",
      "Chính Phủ.",
      "Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question: "10: Theo Hiến pháp 2013, Quốc hội họp",
    choices: ["Công khai.", "Kín.", "Hội nghị.", "Công khai và kín."],
    correct: "Công khai và kín.",
  },
  {
    question: "11: Theo Hiến pháp 2013, Quốc kỳ nước CHXHCN Việt Nam:",
    choices: [
      "Hình chữ nhật, chiều rộng bằng một phần ba chiều dài, nền đỏ, ở giữa có ngôi sao vàng năm cánh.",
      "Hình chữ nhật, chiều rộng bằng ba phần tư chiều dài, nền đỏ, ở giữa có ngôi sao vàng năm cánh.",
      "Hình chữ nhật, chiều rộng bằng bốn phần năm chiều dài, nền đỏ, ở giữa có ngôi sao vàng năm cánh.",
      "Hình chữ nhật, chiều rộng bằng hai phần ba chiều dài, nền đỏ, ở giữa có ngôi sao vàng năm cánh.",
    ],
    correct:
      "Hình chữ nhật, chiều rộng bằng hai phần ba chiều dài, nền đỏ, ở giữa có ngôi sao vàng năm cánh.",
  },
  {
    question:
      "12: Theo Hiến pháp 2013, chủ thể nào thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh?",
    choices: [
      "Quốc hội.",
      "Đảng Cộng sản Việt Nam.",
      "Nhà nước.",
      "Mặt trận Tổ quốc Việt Nam.",
    ],
    correct: "Nhà nước.",
  },
  {
    question: "13: Theo Hiến pháp 2013, Công đoàn Việt Nam là:",
    choices: [
      "Tổ chức xã hội của giai cấp công nhân và của người lao động.",
      "Tổ chức chính trị - xã hội của giai cấp công nhân và của người lao động.",
      "Tổ chức chính trị - xã hội của giai cấp công nhân.",
      "Tổ chức chính trị của giai cấp công nhân và của người lao động.",
    ],
    correct:
      "Tổ chức chính trị - xã hội của giai cấp công nhân và của người lao động.",
  },
  {
    question:
      "14: Theo Hiến pháp năm 2013, Quốc hội có những nhiệm vụ và quyền hạn sau đây:",
    choices: [
      "Quyết định mục tiêu, chỉ tiêu, chính sách, nhiệm vụ cơ bản phát triển kinh tế - xã hội của đất nước.",
      "Đình chỉ việc thi hành văn bản của Chính phủ, Thủ tướng Chính phủ, Tòa án NDTC, Viện kiểm sát NDTC trái với Hiến pháp, luật.",
      "Quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính dưới tỉnh, thành phố trực thuộc trung ương.",
      "Quyết định tổng động viên hoặc động viên cục bộ; ban bố, bãi bỏ tình trạng khẩn cấp trong cả nước hoặc ở từng địa phương.",
    ],
    correct:
      "Quyết định mục tiêu, chỉ tiêu, chính sách, nhiệm vụ cơ bản phát triển kinh tế - xã hội của đất nước.",
  },
  {
    question:
      "15: Theo Hiến pháp 2013, Quốc hội quyết định việc làm Hiến pháp, sửa đổi Hiến pháp khi có ít nhất .... tổng số đại biểu Quốc hội biểu quyết tán thành.",
    choices: ["1/3", "2/3", "3/4", "4/5"],
    correct: "2/3",
  },
  {
    question:
      "16: Theo Hiến pháp 2013, chủ thể nào bảo đảm và phát huy quyền làm chủ của Nhân dân?",
    choices: [
      "     Nhà nước.",
      "    Chính phủ.",
      "     Đảng Cộng sản Việt Nam.",
      "    Mặt trận Tổ quốc Việt Nam.",
    ],
    correct: "Nhà nước.",
  },
  {
    question:
      "17: Theo Hiến pháp 2013, chủ thể nào thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh?",
    choices: [
      "     Quốc hội.",
      "    Đảng Cộng sản Việt Nam.",
      "     Nhà nước.",
      "    Mặt trận Tổ quốc Việt Nam.",
    ],
    correct: "Nhà nước.",
  },
  {
    question:
      "18: Việc bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân được tiến hành theo nguyên tắc:",
    choices: [
      " Phổ thông, bình đẳng, công khai, trực tiếp và bỏ phiếu kín.",
      "	Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
      " Bình đẳng, trực tiếp và bỏ phiếu kín.",
      "	Dân chủ, phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
    ],
    correct: "Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
  },
  {
    question:
      "19: Theo Hiến pháp năm 2013, cơ cấu, số lượng thành viên Chính phủ do ....... quyết định.",
    choices: [
      " 	Quốc hội.",
      "	Ủy ban Thường vụ Quốc hội.",
      " 	Chủ tịch nước.",
      "	Thủ tướng.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "20: Theo hiến pháp năm 2013, Đảng Cộng sản Việt Nam chịu trách nhiệm trước ... về những quyết định của mình",
    choices: [
      " Nhân dân.",
      "	Dân tộc.",
      " Nhà nước.",
      "	Nhân dân và dân tộc Việt Nam.",
    ],
    correct: " Nhân dân.",
  },
  {
    question: "21: Theo Hiến pháp 2013, tất cả quyền lực nhà nước thuộc về ai?",
    choices: [
      " Nhân dân.",
      "	Nhà nước.",
      " Đảng Cộng sản Việt Nam.",
      "	Chính phủ.",
    ],
    correct: "Nhân dân.",
  },
  {
    question:
      "22: Theo Hiến pháp 2013, đặc trưng của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam:",
    choices: [
      " Do Đảng Cộng sản Việt Nam lãnh đạo.",
      "	Quân chủ lập hiến.",
      " Thực hiện chế độ đa nguyên, đa đảng.",
      "	Thực hiện chế độ đa nguyên, đơn đảng.",
    ],
    correct: " Do Đảng Cộng sản Việt Nam lãnh đạo.",
  },
  {
    question:
      "23: Theo Hiến pháp 2013, quy định tổ chức và hoạt động của Chính phủ là nhiệm vụ và quyền hạn của",
    choices: [
      "Thủ tướng Chính phủ.",
      "Uỷ ban Thường vụ Quốc hội.",
      "Chủ tịch nước.",
      "Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question: "24: Theo Hiến pháp năm 2013, nước CHXHCN Việt Nam thực hiện:",
    choices: [
      "Thống nhất đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Nhất quán đường lối đối ngoại độc lập, tự chủ, tự cường, hòa bình, hữu nghị, hợp tác và phát triển.",
      "Thống nhất đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và cùng phát triển.",
    ],
    correct:
      "Thống nhất đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
  },
  {
    question:
      "25: Theo Hiến pháp 2013, chủ thể nào bổ nhiệm, miễn nhiệm đại sứ đặc mệnh toàn quyền của CHXHCN Việt Nam? (KHOẢN 12 ĐIỀU 74 TRANG 15)",
    choices: [
      "Thủ tướng.",
      "Uỷ ban Thường vụ Quốc hội.",
      "Chủ tịch nước. (CHỈ CÓ QUYẾT ĐỊNH CỬ, TRIỆU HỒI ĐẠI SỨC ĐMTQ)",
      "Chủ tịch Quốc hội.",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội.",
  },
  {
    question:
      "26: Theo Hiến pháp 2013, nhân dân thực hiện quyền lực nhà nước bằng",
    choices: [
      "Dân chủ trực tiếp.",
      "Dân chủ đại diện.",
      "Luật.",
      "Dân chủ trực tiếp, bằng dân chủ đại diện.",
    ],
    correct: "Dân chủ trực tiếp, bằng dân chủ đại diện.",
  },
  {
    question:
      "27: Theo Hiến pháp 2013, chủ thể nào bãi bỏ văn bản của Chính phủ, Thủ tướng Chính phủ",
    choices: [
      "Chủ tịch Quốc hội.",
      "Ủy ban Thường vụ Quốc hội.",
      "Tổng Bí thư.",
      "Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question: "28: Hiến pháp năm 2013 là:",
    choices: [
      "Luật cơ bản của nước CHXHCN Việt Nam.",
      "Luật chính của nước CHXHCN Việt Nam.",
      "Luật chủ yếu của nước CHXHCNViệt Nam.",
      "Luật cao nhất của nước CHXHCN Việt Nam.",
    ],
    correct: "Luật cao nhất của nước CHXHCN Việt Nam.",
  },
  {
    question:
      "29: Công dân bao nhiêu tuổi trở lên có quyền bầu cử Quốc hội, Hội đồng nhân dân (ĐIỀU 27 TRANG 6)",
    choices: [
      "Đủ hai mươi mốt tuổi.",
      "Từ đủ mười tám tuổi.",
      "Đủ mười tám tuổi.",
      "Trên mười tám tuổi.",
    ],
    correct: "Đủ mười tám tuổi.",
  },
  {
    question:
      "30: Theo Hiến pháp năm 2013, mọi hành vi vi phạm Hiến pháp đều bị (KHOẢN 1 ĐIỀU 119 TRANG 26)",
    choices: [
      "Xử lý.",
      "Kỷ luật.",
      "Xử lý theo pháp luật.",
      "Kỷ luật theo Hiến pháp.",
    ],
    correct: "Xử lý",
  },

  {
    question:
      "31: Theo Hiến pháp năm 2013, chủ thể nào là đội tiên phong của Nhân dân lao động và của dân tộc Việt Nam?",
    choices: [
      "Chính phủ.",
      "Đảng viên.",
      "Nhà nước.",
      "Đảng Cộng sản Việt Nam.",
    ],
    correct: "Đảng Cộng sản Việt Nam.",
  },
  {
    question:
      "32: Theo Hiến pháp 2013, công dân Việt Nam ở nước ngoài được chủ thể nào bảo hộ. (KHOẢN 3 ĐIỀU 17 TRANG 4)",
    choices: [
      "Chính Phủ.",
      "Bộ Ngoại giao.",
      "Quốc hội.",
      "Nhà nước CHXHCN Việt Nam.",
    ],
    correct: "Nhà nước CHXHCN Việt Nam.",
  },
  {
    question: "33: Theo Hiến pháp 2013, nước CHXHCN Việt Nam bao gồm:",
    choices: [
      "Đất liền, hải đảo, miền núi, vùng biển và vùng trời.",
      "Đất liền, hải đảo, trung du, vùng biển và vùng trời.",
      "Đất liền, hải đảo, vùng biển và vùng trời.",
      "Đất liền, hải đảo, vùng biển, đảo và vùng trời.",
    ],
    correct: "Đất liền, hải đảo, vùng biển và vùng trời.",
  },
  {
    question: "34: Theo hiến pháp năm 2013, Đảng Cộng sản Việt Nam",
    choices: [
      "Gắn bó chặt chẽ với Nhân dân, phục vụ Nhân dân, chịu sự giám sát của Nhân dân.",
      "Gắn bó mật thiết với Nhân dân, phục vụ Nhân dân, chịu sự giám sát của Nhân dân.",
      "Gắn bó mật thiết với Nhân dân, phục vụ Nhân dân, chịu sự kiểm tra của Nhân dân.",
      "Gắn bó chặt chẽ với Nhân dân, phục vụ Nhân dân, chịu sự kiểm tra, giám sát của Nhân dân.",
    ],
    correct:
      "Gắn bó mật thiết với Nhân dân, phục vụ Nhân dân, chịu sự giám sát của Nhân dân.",
  },
  {
    question:
      "35: Theo Hiến pháp năm 2013, mặt trận Tổ quốc Việt Nam, các tổ chức thành viên của Mặt trận và các tổ chức xã hội khác hoạt động:",
    choices: [
      "Trong khuôn khổ Hiến pháp, pháp luật và điều lệ của tổ chức.",
      "Trong khuôn khổ Hiến pháp và pháp luật.",
      "Theo khuôn khổ Hiến pháp và pháp luật.",
      "Trong khuôn khổ Hiến pháp, pháp luật và điều lệ của tổ chức.",
    ],
    correct: "Trong khuôn khổ Hiến pháp, pháp luật.",
  },
  {
    question:
      "36: Theo Hiến pháp 2013, hệ thống chính trị nước CHXHCN Việt Nam tổ chức và hoạt động theo nguyên tắc: (KHOẢN 3 ĐIỀU 2 TRANG 1)",
    choices: [
      "Nguyên tắc tất cả quyền lực nhà nước thuộc về Nhân dân.",
      "Nguyên tắc công bằng, văn minh.",
      "Nguyên tắc quyền lực nhà nước thống nhất; có sự phân chia, phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp và tư pháp.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "Nguyên tắc quyền lực nhà nước thống nhất; có sự phân chia, phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp và tư pháp.",
  },
  {
    question:
      "37: Theo Hiến pháp 2013, bộ máy thực thi quyền tư pháp bao gồm cơ quan nào sau đây:",
    choices: [
      "Viện kiểm sát nhân dân và UBND.",
      "Chính phủ và Tòa án nhân dân.",
      "Quốc hội.",
      "Tòa án nhân dân và Viện kiểm sát nhân dân.",
    ],
    correct: "Tòa án nhân dân và Viện kiểm sát nhân dân.",
  },
  {
    question:
      "38: Theo Hiến pháp 2013, chủ thể nào Bãi bỏ văn bản của Chủ tịch nước.",
    choices: [
      "Thủ tướng Chính phủ.",
      "Uỷ ban Thường vụ Quốc hội.",
      "Tổng Bí thư.",
      "Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "39: Theo Hiến pháp 2013, Chủ tịch nước có mấy nhiệm vụ và quyền hạn.",
    choices: ["05.", "06.", "07.", "08."],
    correct: "06.",
  },
  {
    question:
      "40: Theo Hiến pháp năm 2013, chủ thể nào tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo.",
    choices: [
      "Nhà nước.",
      "Chính phủ.",
      "Quốc hội.",
      "Mặt trận Tổ quốc Việt Nam.",
    ],
    correct: "Nhà nước.",
  },
  {
    question:
      "41: Theo Hiến pháp 2013; Thủ tướng Chính phủ có những nhiệm vụ và quyền hạn sau đây (KHOẢN 6 ĐIỀU 98 TRANG 21)",
    choices: [
      "Bảo vệ công lý, bảo vệ quyền con người, quyền công dân.",
      "Thực hiện chế độ báo cáo trước Nhân dân.",
      "Bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.",
      "Thực hiện quản lý về cán bộ, công chức, viên chức và công vụ trong các cơ quan nhà nước (khoản 5 điều 96. Chính Phủ có những nhiệm vụ và quyền hạn.",
    ],
    correct: "Thực hiện chế độ báo cáo trước Nhân dân.",
  },
  {
    question:
      "42: Theo Hiến pháp 2013; Luật, pháp lệnh phải được công bố chậm nhất là ...... ngày, kể từ ngày được thông qua, trừ trường hợp Chủ tịch nước đề nghị xem xét lại pháp lệnh.",
    choices: ["10", "15", "20", "30"],
    correct: "15",
  },
  {
    question:
      "43: Theo Hiển pháp năm 2013, Công đoàn Việt Nam, Hội nông dân Việt Nam, Đoàn thanh niên cộng sản Hồ Chí Minh, Hội liên hiệp phụ nữ Việt Nam, Hội cựu chiến binh Việt Nam là:",
    choices: [
      "Các tổ chức xã hội.",
      "Các tổ chức chính trị.",
      "Các tổ chức chính trị - xã hội.",
      "Các tổ chức chính trị - xã hội - nghề nghiệp.",
    ],
    correct: "Các tổ chức chính trị - xã hội.",
  },
  {
    question: "44: Theo Hiến pháp 2013, nước CHXHCN Việt Nam do ai làm chủ?",
    choices: [
      "Nhân dân",
      "Dân tộc Việt Nam",
      "Người lao động",
      "Giai cấp công nhân, nông dân và đội ngũ trí thức",
    ],
    correct: "Nhân dân",
  },
  {
    question: "45: Theo Hiến pháp năm 2013, Nhà nước CHXHCN Việt Nam là:",
    choices: [
      "Nhà nước của Nhân dân, do Nhân dân, vì lợi ích của Nhân dân",
      "Nhà nước xã hội chủ nghĩa",
      "Nhà nước pháp quyền xã hội chủ nghĩa",
      "Nhà nước pháp quyền chủ nghĩa xã hội",
    ],
    correct: "Nhà nước pháp quyền xã hội chủ nghĩa",
  },
  {
    question:
      "46: Theo Hiến pháp 2013, Quốc hội có nhiệm vụ và quyền hạn sau đây:",
    choices: [
      "Quyết định đại xá",
      "Quyết định đặc xá",
      "Bãi bỏ văn bản của Bộ trưởng",
      "Quyết định tổng động viên hoặc động viên cục bộ; ban bố, bãi bỏ tình trạng khẩn cấp trong cả nước hoặc ở từng địa phương",
    ],
    correct: "Quyết định đại xá",
  },
  {
    question:
      "47: Theo Hiến pháp 2013, chủ thể nào Đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Chủ tịch nước",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Uỷ ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question:
      "48: Theo Hiến pháp năm 2013, Tổ chức nào sau đây không phải là tổ chức chính trị - xã hội:",
    choices: [
      "Công đoàn Việt Nam",
      "Đoàn thanh niên cộng sản Hồ Chí Minh",
      "Hội liên hiệp phụ nữ Việt Nam",
      "Hội Doanh nhân Việt Nam",
    ],
    correct: "Hội Doanh nhân Việt Nam",
  },
  {
    question: "49: Theo Hiến pháp 2013; Nhà nước CHXHCN Việt Nam là:",
    choices: [
      "Nhà nước xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.",
      "Nhà nước pháp quyền xã hội chủ nghĩa do Nhân dân, vì Nhân dân.",
      "Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.",
      "Nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.",
    ],
    correct:
      "Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân.",
  },
  {
    question:
      "50: Hiến pháp Việt Nam được làm và sửa đổi mấy lần tới hiện nay:",
    choices: ["03", "04", "05", "06"],
    correct: "05",
  },
  {
    question:
      "51: Theo Hiến pháp 2013; Chủ thể nào giải tán Hội đồng nhân dân tỉnh, thành phố trực thuộc trung ương trong trường hợp Hội đồng nhân dân đó làm thiệt hại nghiêm trọng đến lợi ích của Nhân dân",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Uỷ ban Thường vụ Quốc hội",
      "Thủ tướng",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question:
      "52: Theo Hiến pháp 2013, chủ thể nào tạo điều kiện để Hội đồng nhân dân thực hiện nhiệm vụ, quyền hạn do luật định?",
    choices: [
      "Ủy ban Thường vụ Quốc hội",
      "Chủ tịch Quốc hội",
      "Thủ tướng",
      "Chính phủ",
    ],
    correct: "Chính phủ",
  },
  {
    question: "53: Theo Hiến pháp 2013, ủy ban thường vụ Quốc hội gồm:",
    choices: [
      "Chủ tịch Quốc hội, 05 Phó Chủ tịch Quốc hội và các Ủy viên là Chủ nhiệm các ủy ban của Quốc hội",
      "Chủ tịch Quốc hội, các Phó Chủ tịch Quốc hội và các Ủy viên.",
      "Chủ tịch Quốc hội, các Phó Chủ tịch Quốc hội",
      "Chủ tịch Quốc hội, các Phó Chủ tịch Quốc hội, các Ủy viên và Chủ nhiệm Văn phòng Quốc hội",
    ],
    correct: "Chủ tịch Quốc hội, các Phó Chủ tịch Quốc hội và các Ủy viên.",
  },
  {
    question:
      "54: Theo Hiến pháp 2013, chủ thể nào Quy định tổ chức và hoạt động của Kiểm toán nhà nước, chính quyền địa phương",
    choices: [
      "Chủ tịch Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Bí thư",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question: "55: Theo Hiến pháp 2013, quyền lực nhà nước là:",
    choices: [
      "Thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước",
      "Thống nhất, có sự phân chia, phối hợp, kiểm soát giữa các cơ quan nhà nước",
      "Thống nhất, có sự phân công, phối hợp, hỗ trợ, kiểm soát giữa các cơ quan nhà nước",
      "Thống nhất, độc lập, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước",
    ],
    correct:
      "Thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước",
  },
  {
    question:
      "56: Theo Hiến pháp 2013; Nhà nước xây dựng ... cách mạng, chính quy, tinh nhuệ, từng bước hiện đại",
    choices: [
      "Công an nhân dân",
      "Quân đội",
      "Lực lượng vũ trang",
      "Lực lượng dân quân tự vệ",
    ],
    correct: "Công an nhân dân",
  },
  {
    question:
      "57: Theo Hiến pháp 2013; Chủ thể nào soạn thảo, tổ chức lấy ý kiến Nhân dân và trình Quốc hội dự thảo Hiến pháp?",
    choices: [
      "Ủy ban dự thảo Hiến pháp",
      "Ủy ban thường vụ Quốc hội",
      "Quốc hội",
      "Chính phủ",
    ],
    correct: "Ủy ban thường vụ Quốc hội",
  },
  {
    question:
      "58: Theo Hiến pháp 2013; Không được bắt, giam giữ, khởi tố đại biểu Quốc hội nếu không có sự đồng ý của",
    choices: [
      "Chủ tịch Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Quốc hội",
      "Chủ tịch nước",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "59: Theo Hiến pháp 2013; Kỳ họp thứ nhất của Quốc hội khóa mới được triệu tập chậm nhất là ........, kể từ ngày bầu cử đại biểu Quốc hội",
    choices: ["30", "45", "60", "90"],
    correct: "60",
  },
  {
    question: "60: Theo Hiến pháp 2013, Các dân tộc",
    choices: [
      "Bình đẳng, tôn trọng và giúp nhau cùng phát triển",
      "Bình đẳng, đoàn kết, sáng tạo, tôn trọng và giúp nhau cùng phát triển",
      "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
      "Thiểu số được ưu tiên phát triển",
    ],
    correct: "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
  },
  {
    question:
      "61: Theo Hiến pháp 2013, chủ thể nào Đình chỉ việc thi hành văn bản của Chính phủ, Thủ tướng Chính phủ, Tòa án NDTC, Viện kiểm sát NDTC trái với Hiến pháp, luật, nghị quyết của Quốc hội",
    choices: [
      "Chủ tịch nước",
      "Uỷ ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question:
      "62: Theo Hiến pháp 2013; Chủ thể nào Quyết định chính sách cơ bản về đối ngoại",
    choices: [
      "Thủ tướng Chính phủ",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Bí thư",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "63: Theo Hiến pháp 2013; Chủ thể nào tổ chức việc chuẩn bị, triệu tập và chủ trì kỳ họp Quốc hội?",
    choices: [
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc Hội",
      "Thủ tướng",
      "Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc Hội",
  },
  {
    question: "64: Theo Hiến pháp 2013, Mọi người đều bình đẳng trước:",
    choices: ["Hiến pháp và pháp luật", "Pháp luật", "Luật", "Nhà nước"],
    correct: "Pháp luật",
  },
  {
    question:
      "65: Theo Hiến pháp 2013; Pháp lệnh, nghị quyết của Ủy ban thường vụ Quốc hội phải được ...... Tổng số thành viên Ủy ban thường vụ Quốc hội biểu quyết tán thành",
    choices: ["Ít nhất 2/3", "Quá nửa", "Ít nhất 1/3", "Ít nhất 3/4"],
    correct: "Quá nửa",
  },
  {
    question:
      "66: Việc kéo dài nhiệm kỳ của một khóa Quốc hội không được quá ......, trừ trường hợp có chiến tranh.",
    choices: ["6 tháng", "12 tháng", "9 tháng", "24 tháng"],
    correct: "12 tháng",
  },
  {
    question:
      "67: Chủ thể nào có quyền chất vấn Chủ tịch nước, Chủ tịch Quốc hội, Thủ tướng Chính phủ (KHOẢN 1 ĐIỀU 80 TRANG 16)",
    choices: [
      "Chủ nhiệm ủy ban Quốc hội",
      "Đại biểu Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Chính phủ",
    ],
    correct: "Đại biểu Quốc hội",
  },
  {
    question:
      "68: Theo Hiến pháp 2013; Quyết định mục tiêu, chỉ tiêu, chính sách, nhiệm vụ cơ bản phát triển kinh tế - xã hội của đất nước là nhiệm vụ và quyền hạn của",
    choices: [
      "Quốc hội",
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc hội",
      "Chính Phủ",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "69: Theo Hiến pháp 2013; Chủ thể nào Đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Phó Chủ tịch nước, Thủ tướng Chính phủ",
    choices: ["Chủ tịch nước", "Chủ tịch Quốc hội", "Thủ tướng", "Tổng Bí thư"],
    correct: "Chủ tịch nước",
  },
  {
    question:
      "70: Theo Hiến pháp 2013; Chủ thể nào Thực hiện quan hệ đối ngoại của Quốc hội:",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Thủ tướng",
      "Chủ tịch Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "71: Theo Hiến pháp 2013; Chủ thể nào phổ biến và vận động Nhân dân thực hiện Hiến pháp và pháp luật?",
    choices: [
      "Quốc hội",
      "Đại biểu Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Chính phủ",
    ],
    correct: "Đại biểu Quốc hội",
  },
  {
    question:
      "72: Theo Hiến pháp 2013; Đơn vị hành chính - kinh tế đặc biệt do chủ thể nào thành lập?",
    choices: [
      "Thủ tướng Chính phủ",
      "Ủy ban Thường vụ Quốc hội",
      "Chính phủ",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "73: Theo Hiến pháp 2013; Đại biểu Quốc hội có quyền tham gia làm thành viên của",
    choices: [
      "Hội đồng dân tộc hoặc Ủy ban của Quốc hội.",
      "Hội đồng dân tộc",
      "Ủy ban của Quốc hội.",
      "Doanh nghiệp",
    ],
    correct: "Hội đồng dân tộc hoặc Ủy ban của Quốc hội.",
  },
  {
    question:
      "74: Theo Hiến pháp 2013; Chủ thể nào Quyết định tổng động viên hoặc động viên cục bộ?",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Thủ tướng",
      "Chủ tịch Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "75: Theo Hiến pháp 2013; Chủ thể nào có quyền chất vấn Chủ tịch nước, Chủ tịch Quốc hội, Thủ tướng Chính phủ?",
    choices: [
      "Chủ nhiệm ủy ban Quốc hội",
      "Đại biểu Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Chính phủ",
    ],
    correct: "Đại biểu Quốc hội",
  },
  {
    question:
      "76: Theo Hiến pháp 2013; Quốc hội có nhiệm vụ và quyền hạn sau đây:",
    choices: [
      "Bầu, miễn nhiệm, bãi nhiệm Chủ tịch nước",
      "Bầu, miễn nhiệm, bãi nhiệm Thủ tướng Chính phủ",
      "Bầu, miễn nhiệm, bãi nhiệm Chánh án Tòa án NDTC",
      "Tất cả đều đúng",
    ],
    correct: "Tất cả đều đúng",
  },
  {
    question:
      "77: Theo Hiến pháp 2013; Bảo vệ lợi ích của Nhà nước, lợi ích chính đáng của tổ chức và công dân Việt Nam ở nước ngoài là nhiệm vụ và quyền hạn của",
    choices: [
      "Uỷ ban Thường vụ Quốc hội",
      "Chính Phủ",
      "Quốc hội",
      "Thủ tướng",
    ],
    correct: "Chính Phủ",
  },
  {
    question:
      "78: Theo Hiến pháp 2013; Chủ thể nào giám sát hoạt động của Chính phủ, Tòa án NDTC, Viện kiểm sát NDTC, Kiểm toán Nhà nước",
    choices: [
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "79: Theo Hiến pháp 2013; Chủ thể nào phê chuẩn danh sách thành viên Hội đồng quốc phòng và an ninh, Hội đồng bầu cử quốc gia",
    choices: [
      "Chủ tịch Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Bí thư",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "80: Theo Hiến pháp 2013; Phát triển .... là quốc sách hàng đầu nhằm nâng cao dân trí, phát triển nguồn nhân lực, bồi dưỡng nhân tài.",
    choices: [
      "Công tác giáo dục",
      "Giáo dục",
      "Giáo dục đào tạo",
      "Đào tạo nhân sự",
    ],
    correct: "Giáo dục",
  },
  {
    question:
      "81: Theo Hiến pháp năm 2013, Nền kinh tế Việt Nam là nền kinh tế:",
    choices: [
      "Thị trường với nhiều hình thức sở hữu, nhiều thành phần kinh tế",
      "Thị trường định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu, nhiều thành phần kinh tế",
      "Định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu, nhiều thành phần kinh tế",
      "Thị trường định hướng xã hội chủ nghĩa với một hình thức sở hữu, nhiều thành phần kinh tế",
    ],
    correct:
      "Thị trường định hướng xã hội chủ nghĩa với nhiều hình thức sở hữu, nhiều thành phần kinh tế",
  },
  {
    question:
      "82: Theo Hiến pháp 2013; Chủ thể nào Đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Chủ tịch Quốc hội, Phó Chủ tịch Quốc hội",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Uỷ ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question:
      "83: Theo Hiến pháp 2013; Chủ thể nào Quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính dưới tỉnh, thành phố trực thuộc trung ương?",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Ủy ban Thường vụ Quốc Hội",
      "Thủ tướng",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question:
      "84: Theo Hiến pháp 2013; Chủ thể nào Quyết định thành lập, giải thể, nhập, chia, điều chỉnh địa giới hành chính đơn vị hành chính - kinh tế đặc biệt (ĐIỀU 9 KHOẢN 70 TRANG 13)",
    choices: [
      "Thủ tướng Chính phủ",
      "Ủy ban Thường vụ Quốc Hội",
      "Chủ tịch nước",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "85: Theo Hiến pháp 2013; Chủ thể nào Đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Chánh án Tòa án NDTC, Viện trưởng Viện kiểm sát NDTC",
    choices: ["Chủ tịch nước", "Chủ tịch Quốc hội", "Thủ tướng", "Tổng Bí thư"],
    correct: "Chủ tịch Quốc hội",
  },
  {
    question:
      "86: Theo Hiến pháp 2013; Chủ thể nào giữ chức Chủ tịch Hội đồng quốc phòng và an ninh? (KHOẢN 5 ĐIỀU 88 TRANG 18)",
    choices: [
      "Thủ tướng Chính phủ",
      "Chủ tịch nước",
      "Chủ tịch Quốc hội",
      "Bộ trưởng Bộ Quốc phòng",
    ],
    correct: "Chủ tịch nước",
  },
  {
    question: "87: Theo Hiến pháp 2013; Chủ thể nào Quyết định trưng cầu ý dân",
    choices: [
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc hội",
      "Thủ tướng",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "88: Theo Hiến pháp 2013; Chủ thể nào Quyết định thành lập, bãi bỏ bộ, cơ quan ngang bộ của Chính phủ",
    choices: [
      "Thủ tướng Chính phủ",
      "Ủy ban Thường vụ Quốc Hội",
      "Chủ tịch nước",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "89: Theo Hiến pháp 2013, Thi hành lệnh động viên hoặc động viên cục bộ, lệnh ban bố tình trạng khẩn cấp và các biện pháp cần thiết khác để bảo vệ Tổ quốc, bảo đảm tính mạng, tài sản của Nhân dân là nhiệm vụ và quyền hạn của (KHOẢN 3 ĐIỀU 96 TRANG 20)",
    choices: [
      "Chính Phủ",
      "Ủy ban thường vụ Quốc hội",
      "Chủ tịch nước",
      "Thủ tướng",
    ],
    correct: "Chính Phủ",
  },
  {
    question:
      "90: Theo Hiến pháp 2013; Bộ trưởng, Thủ trưởng cơ quan ngang bộ chịu trách nhiệm cá nhân trước (KHOẢN 4 ĐIỀU 95 TRANG 20)",
    choices: [
      "Chủ tịch nước, Thủ tướng Chính phủ, Chính phủ và Quốc hội",
      "Chủ tịch Quốc hội, Thủ tướng Chính phủ, Chính phủ và Quốc hội",
      "Thủ tướng Chính phủ, Chính phủ",
      "Thủ tướng Chính phủ, Chính phủ và Quốc hội",
    ],
    correct: "Thủ tướng Chính phủ, Chính phủ và Quốc hội",
  },
  {
    question:
      "91: Theo Hiến pháp 2013; Bộ trưởng, Thủ trưởng cơ quan ngang bộ thực hiện chế độ báo cáo: (KHOẢN 2 ĐIỀU 99 TRANG 21)",
    choices: [
      "Trước Nhân dân về những vấn đề quan trọng thuộc thẩm quyền quản lý.",
      "Trước Nhân dân về những vấn đề quan trọng thuộc trách nhiệm quản lý.",
      "Trước Chính phủ về những vấn đề quan trọng thuộc thẩm quyền quản lý.",
      "Trước Nhân dân về những vấn đề quan trọng thuộc nhiệm vụ quản lý.",
    ],
    correct:
      "Trước Nhân dân về những vấn đề quan trọng thuộc trách nhiệm quản lý.",
  },
  {
    question:
      "92: Theo Hiến pháp năm 2013, Chính phủ có những nhiệm vụ và quyền hạn sau đây",
    choices: [
      "Tổ chức thi hành Hiến pháp, luật, nghị quyết của Quốc hội, pháp lệnh, nghị quyết của Ủy ban thường vụ Quốc hội, lệnh, quyết định của Chủ tịch nước",
      "Trình Quốc hội phê chuẩn đề nghị bổ nhiệm, miễn nhiệm, cách chức Phó Thủ tướng Chính phủ, Bộ trưởng và Thành viên khác của Chính phủ",
      "Đình chỉ việc thi hành hoặc bãi bỏ văn bản của Bộ trưởng, Thủ trưởng cơ quan ngang bộ, UBND, Chủ tịch UBND tỉnh, thành phố trực thuộc trung ương trái với Hiến pháp, luật",
      "Quyết định và chỉ đạo việc đàm phán, chỉ đạo việc ký, gia nhập điều ước quốc tế thuộc nhiệm vụ, quyền hạn của Chính phủ; tổ chức thực hiện điều ước quốc tế mà CHXHCN Việt Nam là thành viên.",
    ],
    correct:
      "Tổ chức thi hành Hiến pháp, luật, nghị quyết của Quốc hội, pháp lệnh, nghị quyết của Ủy ban thường vụ Quốc hội, lệnh, quyết định của Chủ tịch nước",
  },
  {
    question:
      "93: Theo Hiến pháp 2013; Chủ thể nào bảo đảm kinh phí hoạt động của đại biểu Quốc hội.",
    choices: ["Quốc hội", "Nhà nước", "Ủy ban Thường vụ Quốc hội", "Chính phủ"],
    correct: "Nhà nước",
  },
  {
    question:
      "94: Theo Hiến pháp 2013; Chủ thể nào hướng dẫn và bảo đảm điều kiện hoạt động của đại biểu Quốc hội?",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "95: Theo Hiến pháp 2013; Chủ thể nào là thay mặt nước CHXHCN Việt Nam về đối nội và đối ngoại.",
    choices: ["Chủ tịch nước", "Chủ tịch Quốc hội", "Thủ tướng", "Tổng Bí thư"],
    correct: "Chủ tịch nước",
  },
  {
    question:
      "96: Theo Hiến pháp 2013; Chủ tịch nước ban hành ... để thực hiện nhiệm vụ, quyền hạn của mình.",
    choices: [
      "Nghị định, Lệnh",
      "Lệnh, quyết định",
      "Lệnh, nghị quyết",
      "Lệnh, quyết định, thông tư",
    ],
    correct: "Lệnh, quyết định",
  },
  {
    question:
      "97: Theo Hiến pháp năm 2013, chủ thể nào quyết định các vấn đề quan trọng của đất nước?",
    choices: [
      "Quốc hội",
      "Chính Phủ",
      "Mặt trận Tổ quốc Việt Nam",
      "Đảng Cộng Sản Việt Nam",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "98: Theo Hiến pháp 2013; Chủ thể nào Thống nhất quản lý về kinh tế, văn hóa, xã hội, giáo dục, y tế, khoa học, công nghệ, môi trường, thông tin, truyền thông, đối ngoại",
    choices: ["Chủ tịch nước", "Chủ tịch Quốc hội", "Thủ tướng", "Chính phủ"],
    correct: "Chính phủ",
  },
  {
    question:
      "99: Theo Hiến pháp 2013; Trình dự án luật, dự án ngân sách nhà nước và các dự án khác trước Quốc hội là nhiệm vụ và quyền hạn của (KHOẢN 2 ĐIỀU 96 TRANG 20)",
    choices: ["Thủ tướng", "Chính Phủ", "Bộ Trưởng", "Chủ tịch nước"],
    correct: "Chính phủ",
  },
  {
    question:
      "100: Theo Hiến pháp năm 2013, Người Việt Nam định cư ở nước ngoài là: (KHOẢN 1 ĐIỀU 18 TRANG 5)",
    choices: [
      "Bộ phận cấu thành không thể tách rời của cộng đồng dân tộc Việt Nam.",
      "Bộ phận không tách rời của cộng đồng dân tộc Việt Nam.",
      "Bộ phận không thể tách rời của cộng đồng dân tộc Việt Nam.",
      "Một phần không tách rời của cộng đồng dân tộc Việt Nam.",
    ],
    correct: "Bộ phận không tách rời của cộng đồng dân tộc Việt Nam.",
  },
  {
    question:
      "101: Theo Hiến pháp 2013; Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là sự nghiệp của: (ĐIỀU 64 TRANG 11)",
    choices: [
      "Toàn dân.",
      "Toàn Đảng, toàn dân, toàn quân",
      "Nhân dân",
      "Chính Phủ",
    ],
    correct: "Toàn dân.",
  },
  {
    question: "102: Theo Hiến pháp 2013; Mặt trận Tổ quốc Việt Nam là:",
    choices: [
      "Tổ chức liên minh chính trị",
      "Liên hiệp liên minh chính trị",
      "Đơn vị liên minh chính trị",
      "Liên minh chính trị",
    ],
    correct: "Tổ chức liên minh chính trị",
  },
  {
    question: "103: Theo Hiến pháp năm 2013, tội nào là tội nặng nhất.",
    choices: [
      "Phản bội đất nước",
      "Phản bội Tổ quốc",
      "Phản bội Đảng Cộng sản Việt Nam",
      "Phản bội Dân tộc Việt Nam",
    ],
    correct: "Phản bội Tổ quốc",
  },
  {
    question:
      "104: Theo Hiến pháp 2013; Đại biểu Quốc hội là người đại diện cho ý chí, nguyện vọng của Nhân dân:",
    choices: [
      "Ở đơn vị bầu cử ra mình",
      "Của Nhân dân cả nước.",
      "Ở đơn vị bầu cử ra mình và của Nhân dân cả nước.",
      "Ở địa phương bầu cử ra mình và của Nhân dân cả nước.",
    ],
    correct: "Ở đơn vị bầu cử ra mình và của Nhân dân cả nước.",
  },
  {
    question: "105: Theo Hiến pháp 2013; Quốc hội họp:",
    choices: [
      "Mỗi năm hai kỳ",
      "Mỗi năm ba kỳ",
      "Mỗi năm bốn kỳ",
      "Mỗi năm năm kỳ",
    ],
    correct: "Mỗi năm hai kỳ",
  },
  {
    question:
      "106: Theo Hiến pháp 2013; Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là sự nghiệp của: (ĐIỀU 64 TRANG 11)",
    choices: [
      "Toàn dân.",
      "Toàn Đảng, toàn dân, toàn quân",
      "Nhân dân",
      "Chính Phủ",
    ],
    correct: "Toàn dân.",
  },
  {
    question: "107: Theo Hiến pháp 2013; Mặt trận Tổ quốc Việt Nam là:",
    choices: [
      "Tổ chức chính trị của chính quyền nhân dân; đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân",
      "Cơ sở chính trị của chính quyền nhân dân; đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân",
      "Cơ sở chính trị của chính quyền; đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân",
      "Cơ sở chính trị của chính quyền nhân dân; bảo vệ quyền và lợi ích hợp pháp, chính đáng của công nhân, nông dân",
    ],
    correct:
      "Cơ sở chính trị của chính quyền nhân dân; đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân",
  },
  {
    question:
      "108: Theo Hiến pháp 2013, Không ai bị phân biệt đối xử trong đời sống: (KHOẢN 2 ĐIỀU 16 TRANG 4)",
    choices: [
      "Chính trị, dân sự, kinh tế, văn hóa, xã hội, thể thao",
      "Chính trị, dân sự, kinh tế, văn hóa, xã hội.",
      "Chính trị, kinh tế, văn hóa, xã hội.",
      "Chính trị, dân sự, kinh tế, văn hóa",
    ],
    correct: "Chính trị, dân sự, kinh tế, văn hóa, xã hội.",
  },
  {
    question:
      "109: Theo Hiến pháp 2013; Việc bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân được tiến hành theo nguyên tắc:",
    choices: [
      "Phổ thông, bình đẳng, công khai, trực tiếp và bỏ phiếu kín.",
      "Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
      "Bình đẳng, trực tiếp và bỏ phiếu kín.",
      "Dân chủ, phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
    ],
    correct: "Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.",
  },
  {
    question:
      "110: Theo Hiến pháp 2013; Đại biểu Hội đồng nhân dân có quyền chất vấn ai?",
    choices: [
      "Chủ tịch UBND",
      "Chánh án Tòa án nhân dân",
      "Viện trưởng Viện kiểm sát nhân dân",
      "Tất cả đều đúng",
    ],
    correct: "Tất cả đều đúng",
  },
  {
    question: "111: Theo Hiến pháp năm 2013, Quốc hội là:",
    choices: [
      "Tổ chức quyền lực nhà nước cao nhất của nước CHXHCN Việt Nam.",
      "Cơ quan đại biểu cao nhất của Nhà nước Việt Nam",
      "Cơ quan hành chính nhà nước cao nhất của nước CHXHCN Việt Nam.",
      "Cơ quan quyền lực nhà nước cao nhất của nước CHXHCN Việt Nam.",
    ],
    correct: "Tổ chức quyền lực nhà nước cao nhất của nước CHXHCN Việt Nam.",
  },
  {
    question:
      "112: Theo Hiến pháp 2013; Hội đồng bầu cử quốc gia là cơ quan do .........thành lập",
    choices: [
      "Quốc hội",
      "Thủ tướng Chính phủ",
      "Uỷ ban Thường vụ Quốc hội",
      "Chủ tịch nước",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "113: Theo Hiến pháp 2013; Chủ thể nào bãi bỏ nghị quyết của Hội đồng nhân dân tỉnh, thành phố trực thuộc trung ương trái với Hiến pháp, luật và văn bản của cơ quan nhà nước cấp trên",
    choices: [
      "Chủ nhiệm Văn phòng Quốc hội",
      "Uỷ ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Uỷ ban Thường vụ Quốc hội",
  },
  {
    question: "114: Hiến pháp được thông qua khi có ít nhất:",
    choices: [
      "1/3 tổng số đại biểu Quốc hội biểu quyết tán thành",
      "2/3 tổng số đại biểu Quốc hội biểu quyết tán thành",
      "3/4 tổng số đại biểu Quốc hội biểu quyết tán thành",
      "4/5 tổng số đại biểu Quốc hội biểu quyết tán thành",
    ],
    correct: "2/3 tổng số đại biểu Quốc hội biểu quyết tán thành",
  },
  {
    question:
      "115: Theo Hiến pháp 2013; Chủ thể nào có quyền đề nghị làm Hiến pháp, sửa đổi Hiến pháp? (KHOẢN 1 ĐIỀU 20 TRANG 26)",
    choices: [
      "Chủ tịch nước",
      "Ủy ban thường vụ Quốc hội",
      "Chính phủ",
      "Tất cả đều đúng",
    ],
    correct: "Tất cả đều đúng",
  },
  {
    question:
      "116: Theo Hiến pháp 2013; Chủ thể nào Đình chỉ việc thi hành hoặc bãi bỏ văn bản của Bộ trưởng, Thủ trưởng cơ quan ngang bộ (khoản 4 điều 98, trang 21)",
    choices: [
      "Uỷ ban Thường vụ Quốc hội",
      "Chủ tịch Quốc hội",
      "Thủ tướng Chính phủ",
      "Chính phủ",
    ],
    correct: "Thủ tướng Chính phủ",
  },
  {
    question:
      "117: Theo Hiến pháp 2013; Thủ tướng Chính phủ có những nhiệm vụ và quyền hạn sau đây:",
    choices: [
      "Quyết định tặng thưởng huân chương, huy chương, các giải thưởng nhà nước, danh hiệu vinh dự nhà nước",
      "Đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Chánh án Tòa án NDTC",
      "Công bố Hiến pháp, luật, pháp lệnh",
      "Phê chuẩn việc bầu, miễn nhiệm và quyết định điều động, cách chức Chủ tịch, Phó Chủ tịch UBND tỉnh, thành phố trực thuộc trung ương",
    ],
    correct:
      "Phê chuẩn việc bầu, miễn nhiệm và quyết định điều động, cách chức Chủ tịch, Phó Chủ tịch UBND tỉnh, thành phố trực thuộc trung ương",
  },
  {
    question:
      "118: Theo Hiến pháp 2013; Thủ tướng Chính phủ báo cáo công tác của Chính phủ, Thủ tướng Chính phủ trước:",
    choices: [
      "Chủ tịch Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước",
      "Chủ tịch Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước, Chính phủ",
      "Quốc hội, Ủy ban thường vụ Quốc hội",
      "Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước",
    ],
    correct: "Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước",
  },
  {
    question:
      "119: Theo Hiến pháp 2013; Bộ trưởng, Thủ trưởng cơ quan ngang bộ là:",
    choices: [
      "Thành viên của Chính phủ",
      "Thành viên thuộc Chính phủ",
      "Thành viên Chính phủ",
      "Thành viên Quốc hội",
    ],
    correct: "Thành viên Chính phủ",
  },
  {
    question:
      "120: Theo Hiến pháp 2013; Phê chuẩn đề nghị bổ nhiệm, miễn nhiệm, cách chức Phó Thủ tướng Chính phủ, Bộ trưởng và thành viên khác của Chính phủ là nhiệm vụ và quyền hạn của",
    choices: [
      "Thủ tướng Chính phủ",
      "Ủy ban Thường vụ Quốc hội",
      "Chủ tịch nước",
      "Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "121: Theo Hiến pháp 2013; Thủ tướng Chính phủ do .......bầu trong số đại biểu Quốc hội.",
    choices: [
      "Quốc hội",
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Quốc hội",
  },
  {
    question:
      "122: Theo Hiến pháp 2013; Sau khi được bầu chủ thể nào phải tuyên thệ trung thành với Tổ quốc, Nhân dân và Hiến pháp?",
    choices: [
      "Chủ tịch nước",
      "Chủ tịch Quốc hội",
      "Thủ tướng Chính phủ",
      "Tất cả đều đúng",
    ],
    correct: "Tất cả đều đúng",
  },
  {
    question:
      "123: Theo Hiến pháp 2013; Chủ thể nào Giám sát việc thi hành Hiến pháp, luật, nghị quyết của Quốc hội",
    choices: [
      "Chủ tịch nước",
      "Ủy ban Thường vụ Quốc hội",
      "Tổng Thư ký Quốc hội",
      "Chủ tịch Quốc hội",
    ],
    correct: "Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "124: Theo Hiến pháp năm 2013, Chính phủ làm việc theo chế độ: (trang 19)",
    choices: [
      "Tập trung dân chủ",
      "Tập thể, quyết định theo đa số",
      "Thủ trưởng",
      "Hội nghị",
    ],
    correct: "Tập thể, quyết định theo đa số",
  },
  {
    question: "125: Theo Hiến pháp năm 2013, Chính phủ gồm:",
    choices: [
      "Thủ tướng Chính phủ, Phó Thủ tướng Chính phủ, các Bộ trưởng",
      "Thủ tướng Chính phủ, các Phó Thủ tướng Chính phủ, các Bộ trưởng, thứ trưởng và Thủ trưởng cơ quan ngang bộ.",
      "Thủ tướng Chính phủ, Phó Thủ tướng Chính phủ, Bộ trưởng và Thủ trưởng cơ quan ngang bộ.",
      "Thủ tướng Chính phủ, các Phó Thủ tướng Chính phủ, các Bộ trưởng và Thủ trưởng cơ quan ngang bộ.",
    ],
    correct:
      "Thủ tướng Chính phủ, các Phó Thủ tướng Chính phủ, các Bộ trưởng và Thủ trưởng cơ quan ngang bộ.",
  },
  {
    question:
      "1: Bảo đảm thực hiện một nền hành chính thống nhất, thông suốt, liên tục, dân chủ, hiện đại, phục vụ Nhân dân, chịu sự kiểm tra, giám sát của Nhân dân là nguyên tắc tổ chức của cơ quan nào sau đây?",
    choices: ["Quốc hội.", "Chính phủ.", "Bộ Nội vụ.", "Hội đồng Nhân dân."],
    correct: "Chính phủ.",
  },
  {
    question: "2: Đáp án nào sau đây là định nghĩa đúng về Chính Phủ?",
    choices: [
      "Chính phủ là cơ quan hành chính nhà nước cao nhất của nước CHXHCN Việt Nam.",
      "Chính phủ thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội.",
      "Chính phủ chịu trách nhiệm trước Quốc hội và báo cáo công tác trước Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước.",
      "Tất cả đáp án trên.",
    ],
    correct: "Tất cả đáp án trên.",
  },
  {
    question:
      "3: Cơ quan nào là cơ quan thực hiện quyền hành pháp, là cơ quan chấp hành của Quốc hội?",
    choices: [
      "Chính phủ.",
      "Quốc hội.",
      "Ủy ban thường vụ Quốc hội.",
      "Chủ tịch Nước.",
    ],
    correct: "Chính phủ.",
  },
  {
    question:
      "4: Nhiệm vụ và quyền hạn của Chính phủ trong tổ chức thi hành Hiến pháp và pháp luật bao gồm những gì?",
    choices: [
      "Ban hành kịp thời và đầy đủ các văn bản pháp luật để thi hành Hiến Pháp, pháp luật và Nghị quyết. Quyết định các biện pháp để tổ chức thi hành Hiến Pháp, pháp luật và Nghị quyết.",
      "Lãnh đạo, chỉ đạo công tác tuyên truyền, phổ biến, giáo dục Hiến pháp và pháp luật.",
      "Tổng hợp đánh giá tình hình thi hành Hiến pháp, pháp luật.",
      "Những phương án trên.",
    ],
    correct: "Những phương án trên.",
  },
  {
    question:
      "5: Ý nào sau đây là nhiệm vụ và quyền hạn của Chính phủ trong hoạch định chính sách và trình dự án luật, pháp lệnh?",
    choices: [
      "Đề xuất, xây dựng chiến lược, quy hoạch, kế hoạch, chính sách và các chương trình, dự án khác trình Quốc hội, Ủy ban thường vụ Quốc hội xem xét, quyết định.",
      "Quyết định chiến lược, quy hoạch, kế hoạch, chính sách và các chương trình, dự án khác theo thẩm quyền.",
      "Xây dựng các dự án luật, dự thảo nghị quyết trình Quốc hội, dự án pháp lệnh, dự thảo nghị quyết trình Ủy ban thường vụ Quốc hội.",
      "Tất cả đáp án trên.",
    ],
    correct: "Tất cả đáp án trên.",
  },
  {
    question: "6: Cơ cấu tổ chức của Chính phủ gồm những gì?",
    choices: [
      "Bộ và Cơ quan ngang Bộ.",
      "Ủy ban Thường vụ Quốc Hội.",
      "Ủy ban trung ương Mặt trận Tổ quốc Việt Nam.",
      "Quốc hội.",
    ],
    correct: "Bộ và Cơ quan ngang Bộ.",
  },
  {
    question:
      "7: Chính phủ trình cơ quan nào để quyết định việc thành lập, bãi bỏ bộ, cơ quan ngang bộ?",
    choices: [
      "Chủ tịch nước.",
      "Quốc hội.",
      "Nhà nước.",
      "Ủy ban Thường vụ Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "8: Ai là người đứng đầu Chính phủ và hệ thống hành chính nhà nước?",
    choices: [
      "Thủ tướng chính phủ.",
      "Chủ tịch Quốc hội.",
      "Bộ trưởng các bộ và ngang bộ.",
      "Chủ tịch Nước.",
    ],
    correct: "Thủ tướng chính phủ.",
  },
  {
    question: "9: Nguyên tắc tổ chức và hoạt động của Bộ là",
    choices: [
      "Công khai, minh bạch, liêm chính và hiện đại hóa hoạt động của Bộ.",
      "Dân chủ, công khai, minh bạch và hiện đại hóa hoạt động của Bộ.",
      "Minh bạch và hiện đại hóa hoạt động của Bộ.",
      "Công khai, minh bạch và hiện đại hóa hoạt động của Bộ.",
    ],
    correct: "Minh bạch và hiện đại hóa hoạt động của Bộ.",
  },
  {
    question: "10: Bộ trưởng là:",
    choices: [
      "Công chức Chính phủ.",
      "Thành viên Chính phủ.",
      "Ủy viên Chính phủ.",
      "Ủy viên thường trực Chính phủ.",
    ],
    correct: "Thành viên Chính phủ.",
  },
  {
    question: "11: Thứ trưởng:",
    choices: [
      "Có thể kiêm người đứng đầu tổ chức, đơn vị thuộc Bộ, trừ trường hợp đặc biệt.",
      "Không được kiêm người đứng đầu tổ chức, đơn vị thuộc Bộ, trừ trường hợp đặc biệt.",
      "Nghiêm cấm kiêm người đứng đầu tổ chức, đơn vị thuộc Bộ, trừ trường hợp đặc biệt.",
      "Không kiêm người đứng đầu tổ chức, đơn vị thuộc Bộ, trừ trường hợp đặc biệt.",
    ],
    correct:
      "Không kiêm người đứng đầu tổ chức, đơn vị thuộc Bộ, trừ trường hợp đặc biệt.",
  },
  {
    question:
      "12: Nhiệm vụ và quyền hạn của Bộ trưởng trong mối quan hệ với chính quyền địa phương",
    choices: [
      "Chỉ đạo, hướng dẫn, kiểm tra UBND các cấp thực hiện các nhiệm vụ công tác thuộc ngành, lĩnh vực được phân công.",
      "Đề nghị UBND, Chủ tịch UBND cấp tỉnh đình chỉ việc thi hành hoặc bãi bỏ những văn bản pháp luật của UBND, Chủ tịch UBND cấp dưới trái với các văn bản về ngành, lĩnh vực được phân.",
      "Kiến nghị với Thủ tướng Chính phủ bãi bỏ việc thi hành nghị quyết của Hội đồng nhân dân cấp tỉnh trái với Hiến pháp, luật và văn bản của cơ quan nhà nước cấp trên về ngành, lĩnh vực chịu trách nhiệm quản lý.",
      "Tất cả đều đúng.",
    ],
    correct: "Tất cả đều đúng.",
  },
  {
    question: "13: Ai là người bầu ra Thủ tướng Chính phủ?",
    choices: [
      "Đại biểu Quốc hội.",
      "Chủ tịch nước.",
      "Nhân dân.",
      "Chủ tịch Quốc hội.",
    ],
    correct: "Đại biểu Quốc hội.",
  },
  {
    question: "14: Ý kiến nào sau đây là nguyên tắc tổ chức của Chính phủ?",
    choices: [
      "Tuân thủ Hiến pháp và pháp luật, quản lý xã hội bằng Hiến pháp và pháp luật.",
      "Phân định rõ nhiệm vụ, quyền hạn, trách nhiệm giữa Chính phủ, Thủ tướng Chính phủ với Bộ trưởng, Thủ trưởng cơ quan ngang bộ và chức năng.",
      "Phân cấp, phân quyền hợp lý giữa Chính phủ với chính quyền địa phương.",
      "Tất cả đáp án trên.",
    ],
    correct: "Tất cả đáp án trên.",
  },
  {
    question: "15: Chính phủ bao gồm những chủ thể nào?",
    choices: [
      "Thủ tướng Chính phủ và Phó Thủ tướng Chính phủ.",
      "Bộ trưởng và Thủ trưởng cơ quan ngang bộ.",
      "Cả a và b đều đúng.",
      "Chủ tịch Quốc hội.",
    ],
    correct: "Cả a và b đều đúng.",
  },
  {
    question: "16: Số lượng thành viên Chính phủ do ai quyết định?",
    choices: [
      "Quốc hội.",
      "Thủ tướng chính phủ.",
      "Chủ tịch nước.",
      "Ủy ban Thường vụ Quốc hội.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "17: Nội dung nào dưới đây không phải nhiệm vụ và quyền hạn của Chính phủ trong quản lý thông tin và truyền thông?",
    choices: [
      "Xây dựng chính sách và các biện pháp phát triển, quản lý và bảo đảm an ninh, an toàn hệ thống thông tin và truyền thông.",
      "Bảo vệ và phát huy giá trị di sản văn hóa; khuyến khích phát triển các tài năng sáng tạo văn hóa, nghệ thuật.",
      "Phát triển hoạt động khoa học và công nghệ.",
      "Gọi vốn từ các doanh nghiệp nhằm phát triển thông tin và truyền thông.",
    ],
    correct:
      "Bảo vệ và phát huy giá trị di sản văn hóa; khuyến khích phát triển các tài năng sáng tạo văn hóa, nghệ thuật.",
  },
  {
    question:
      "18: Dự toán ngân sách nhà nước và phương án phân bổ ngân sách trung ương hằng năm sẽ do đối tượng nào trình lên Quốc hội?",
    choices: [
      "Bộ trưởng Bộ Tài chính.",
      "Chủ tịch nước.",
      "Chính phủ.",
      "Bộ trưởng Bộ Kế hoạch và đầu tư.",
    ],
    correct: "Chính phủ.",
  },
  {
    question:
      "19: Số lượng Thứ trưởng, Phó Thủ trưởng cơ quan ngang bộ tối đa không quá?",
    choices: ["04 người.", "05 người.", "06 người.", "07 người."],
    correct: "05 người.",
  },
  {
    question:
      "20: Trong lĩnh vực văn hóa, thể thao và du lịch, Chính phủ đã có những giải pháp gì để phát triển lĩnh vực này trong giai đoạn hiện nay?",
    choices: [
      "Quyết định chính sách để xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
      "Bảo vệ và phát huy giá trị di sản văn hóa; khuyến khích phát triển các tài năng sáng tạo văn hóa, nghệ thuật.",
      "Quyết định các chinh sách để phát triển sự nghiệp thể dục, thể thao; huy động đầu tư các nguồn lực xã hội để nâng cao thể dục thể thao.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "21: Trong việc quản lý và phát triển kinh tế quốc dân, Chính phủ có biện pháp gì để hội nhập với kinh tế thế giới?",
    choices: [
      "Phát triển các hình thức hợp tác kinh tế với các quốc gia, vùng lãnh thổ và các tổ chức quốc tế.",
      "Tôn trọng độc lập, chủ quyền và cùng có lợi, hỗ trợ và thúc đẩy sản xuất trong nước.",
      "Khuyến khích đầu tư nước ngoài.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "22: Nội dung nào sau đây thuộc nhiệm vụ và quyền hạn của Chính phủ trong quản lý y tế, chăm sóc sức khỏe của Nhân dân và dân số?",
    choices: [
      "Đầu tư, phát triển nhân lực y tế có chất lượng ngày càng cao.",
      "Tạo nguồn tài chính y tế bền vững để bảo vệ, chăm sóc sức khỏe của Nhân dân.",
      "Thực hiện các chính sách ưu tiên chăm sóc sức khỏe cho đồng bào dân tộc thiểu số, đồng bào ở miền núi, hải đảo và vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "23: Chính phủ đã áp dụng những biện pháp nào để quản lý và thực hiện chính sách dân số?",
    choices: [
      "Duy trì quy mô và cơ cấu dân số hợp lý.",
      "Nâng cao chất lượng dân số và phân bố dân cư phù hợp với nhu cầu phát triển KT-XH, phát triển đô thị của cả nước.",
      "Kế hoạch hoá gia đình.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "24: Trong thời gian Quốc hội không họp, Thủ tướng Chính phủ có nhiệm vụ và quyền hạn gì?",
    choices: [
      "Quyết định giao quyền Bộ trưởng, Thủ trưởng cơ quan ngang bộ theo đề nghị của Bộ trưởng Bộ Nội vụ trong trường hợp khuyết Bộ trưởng hoặc Thủ trưởng cơ quan ngang bộ.",
      "Trong thời gian giữa hai kỳ họp Hội đồng nhân dân cấp tỉnh, quyết định giao quyền Chủ tịch UBND cấp tỉnh theo đề nghị của Bộ trưởng Bộ Nội vụ trong trường hợp khuyết Chủ tịch UBND cấp tỉnh.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "25: Số lượng Thứ trưởng, Phó Thủ trưởng cơ quan ngang bộ trong trường hợp do sát nhập hoặc do yêu cầu điều động, luân chuyển cán bộ của cơ quan có thẩm quyền thì:",
    choices: [
      "Thủ tướng Chính phủ trình Ủy ban thường vụ Quốc hội xem xét, quyết định.",
      "Thủ tướng chính phủ trình Chủ tịch nước xem xét, quyết định.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "Thủ tướng Chính phủ trình Ủy ban thường vụ Quốc hội xem xét, quyết định.",
  },
  {
    question:
      "26: Trong việc quản lý về quốc phòng, Chính phủ đã có những tác động nào tới nền quốc phòng toàn dân?",
    choices: [
      "Củng cố và tăng cường nền quốc phòng toàn dân, xây dựng thế trận quốc phòng toàn dân gắn với thế trận an ninh nhân dân, kết hợp kinh tế với quốc phòng, an ninh.",
      "Phát triển công nghiệp quốc phòng, an ninh, bảo đảm trang bị cho lực lượng vũ trang nhân dân.",
      "a và b đều đúng.",
    ],
    correct: "a và b đều đúng.",
  },
  {
    question:
      "27: Đối tượng nào quyết định chính sách cơ bản về đối ngoại do Chính phủ thống nhất đề ra?",
    choices: ["Chủ tịch nước.", "Quốc hội.", "Bộ Ngoại giao.", "Bộ Tư pháp."],
    correct: "Quốc hội.",
  },
  {
    question:
      "28: Theo quyền hạn và nhiệm vụ của Chính phủ trong đối ngoại và hội nhập quốc tế, quyết định việc ký, gia nhập, phê duyệt hoặc chấm dứt hiệu lực điều ước quốc tế được đối tượng nào uỷ quyền cho Chính phủ thực hiện?",
    choices: ["Quốc hội.", "Chủ tịch nước.", "Nhân dân.", "Nhà nước."],
    correct: "Chủ tịch nước.",
  },
  {
    question:
      "29: Theo luật tổ chức Chính phủ, việc thành lập, giải thể, nhập, chia, điều chỉnh địa giới đơn vị hành chính dưới cấp tỉnh được trình cơ quan nào quyết định?",
    choices: [
      "Quốc hội.",
      "Ủy ban thường vụ Quốc hội.",
      "Uỷ ban nhân dân các cấp.",
      "Chính phủ.",
    ],
    correct: "Ủy ban thường vụ Quốc hội.",
  },
  {
    question:
      "30: Theo luật tổ chức Chính phủ, việc thành lập, bãi bỏ bộ, cơ quan ngang bộ…trình lên cơ quan nào quyết định?",
    choices: [
      "Quốc hội.",
      "Ủy ban thường vụ Quốc hội.",
      "Nhân dân.",
      "Thủ tướng Chính phủ.",
    ],
    correct: "Quốc hội.",
  },
  {
    question:
      "31: Chính phủ có quyền hạn gì trong việc quản lý về tổ chức bộ máy hành chính nhà nước?",
    choices: [
      "Quyết định việc thành lập, sáp nhập, giải thể cơ quan thuộc Chính phủ.",
      "Quy định chức năng, nhiệm vụ, quyền hạn, cơ cấu tổ chức của bộ, cơ quan ngang bộ, cơ quan thuộc Chính phủ.",
      "Quy định về tổ chức các cơ quan chuyên môn thuộc UBND cấp tỉnh, UBND huyện, quận, thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc trung ương.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "32: Đối tượng nào được hướng dẫn và kiểm tra trong việc thực hiện Hiến pháp, luật, nghị quyết của Quốc hội, pháp lệnh, nghị quyết của Ủy ban thường vụ Quốc hội, lệnh, quyết định của Chủ tịch nước, nghị quyết, nghị định của Chính phủ, quyết định, chỉ thị của Thủ tướng Chính phủ?",
    choices: [
      "Hội đồng nhân dân.",
      "Uỷ ban nhân dân.",
      "Các bộ, ngành ngang bộ.",
      "Bộ Công an.",
    ],
    correct: "Hội đồng nhân dân.",
  },
  {
    question:
      "33: Nội dung nào sau đây không thuộc nhiệm vụ và quyền hạn của Bộ trưởng, thủ trưởng cơ quan ngang bộ với tư cách là người đứng đầu bộ, cơ quan ngang bộ là: (KHOẢN 3,4,8 ĐIỀU 34 TRANG 13,14):",
    choices: [
      "Đề nghị Thủ tướng Chính phủ việc bổ nhiệm, miễn nhiệm, cách chức, cho từ chức Thứ trưởng hoặc Phó Thủ trưởng cơ quan ngang bộ.",
      "Ban hành văn bản quy phạm pháp luật theo thẩm quyền để thực hiện chức năng, nhiệm vụ quản lý nhà nước đối với ngành, lĩnh vực được phân công.",
      "Quyết định thành lập các đơn vị tổ chức sự nghiệp công lập theo quy định của pháp luật.",
      "Tất cả câu trên đều sai.",
    ],
    correct: "Tất cả câu trên đều sai.",
  },
  {
    question:
      "34: Chính phủ đã phối hợp với Ủy ban trung ương Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội thực hiện những nhiệm vụ gì?",
    choices: [
      "Chính phủ gửi dự thảo văn bản để UBTW và TCCT-XH có liên quan được tham gia ý kiến.",
      "Chính phủ thường xuyên thông báo cho UBTW và TCCT-XH về tình hình kinh tế - xã hội và các quyết định, chủ trương quan trọng của Chính phủ về Nhân dân.",
      "Chính phủ tạo điều kiện thuận lợi để UBTW và TCCT-XH  tuyên truyền, phổ biến pháp luật trong Nhân dân, động viên, tổ chức Nhân dân tham gia xây dựng và củng cố chính quyền nhân dân.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "35: Chính phủ báo cáo công tác của Chính phủ với những cơ quan nào sau đây?",
    choices: [
      "Quốc hội.",
      "Ủy ban thường vụ Quốc hội.",
      "Chủ tịch nước.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "36: Theo điều 28 của luật Tổ chức Chính phủ, Nhiệm vụ và quyền hạn của Thủ tướng Chính phủ bao gồm bao nhiêu điều khoản?",
    choices: ["11", "09", "08", "07"],
    correct: "11",
  },
  {
    question:
      "37 : Theo điều 28 của luật Tổ chức Chính phủ, việc xây dựng các dự án luật, pháp lệnh, dự thảo nghị quyết được trình lên cơ quan nào?",
    choices: [
      "Quốc hội, Ủy ban thường vụ Quốc hội.",
      "Bộ trưởng, Thủ trưởng cơ quan ngang bộ.",
      "Chủ tịch UBND cấp tỉnh.",
      "Chủ tịch Nước.",
    ],
    correct: "Quốc hội, Ủy ban thường vụ Quốc hội.",
  },
  {
    question:
      "38 : Theo điều 28 của Luật Tổ chức Chính phủ, nhiệm vụ về hoạt động của hệ thống hành chính nhà nước của Thủ tướng Chính phủ không bao gồm điều khoản nào?",
    choices: [
      "Quản lý và điều hành hoạt động của hệ thống hành chính nhà nước từ trung ương đến địa phương trong quá trình phục vụ Nhân dân, thực hiện các nhiệm vụ phát triển kinh tế, văn hóa, xã hội và tăng cường quốc phòng, an ninh.",
      "Lãnh đạo, chỉ đạo, tổ chức thanh tra, kiểm tra các hoạt động thực thi công vụ của cán bộ, công chức trong hệ thống hành chính nhà nước.",
      "Lãnh đạo, chỉ đạo, kiểm tra hoạt động của các Bộ trưởng, Thủ trưởng cơ quan ngang bộ, chính quyền địa phương và người đứng đầu cơ quan, đơn vị trong hệ thống hành chính nhà nước từ trung ương đến địa phương.",
      "Lãnh đạo, chỉ đạo việc quản lý, điều hành toàn bộ cơ sở vật chất, tài chính và nguồn ngân sách nhà nước để phục vụ cho sự vận hành của bộ máy nhà nước.",
    ],
    correct:
      "Lãnh đạo, chỉ đạo việc quản lý, điều hành toàn bộ cơ sở vật chất, tài chính và nguồn ngân sách nhà nước để phục vụ cho sự vận hành của bộ máy nhà nước.",
  },
  {
    question:
      "39: Đề nghị nào sau đây mà Thủ tướng Chính phủ trình Quốc hội phê chuẩn đối với Phó Thủ tướng Chính phủ, Bộ trưởng và thành viên khác của Chính phủ là gì?",
    choices: ["Bổ nhiệm.", "Miễn nhiệm.", "Cách chức.", "Tất cả đáp án trên."],
    correct: "Tất cả đáp án trên.",
  },
  {
    question:
      "40: Bộ trưởng, Thủ trưởng cơ quan ngang bộ chịu trách nhiệm cá nhân trước Thủ tướng Chính phủ, Chính phủ và Quốc hội về các nội dung nào sau đây?",
    choices: [
      "Kết quả, hiệu lực, hiệu quả hoạt động của bộ, cơ quan ngang bộ.",
      "Về các quyết định và kết quả thực hiện các quyết định trong phạm vi nhiệm vụ.",
      "Ngành, lĩnh vực được phân công.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "41: Số lượng cấp phó của người đứng đầu vụ, văn phòng, thanh tra, cục, đơn vị sự nghiệp công lập đảm bảo bình quân không quá:",
    choices: [
      "03 người trên một đơn vị.",
      "04 người trên một đơn vị.",
      "05 người trên một đơn vị.",
      "06 người trên một đơn vị.",
    ],
    correct: "03 người trên một đơn vị.",
  },
  {
    question:
      "42: Theo điều 29 của luật Tổ chức Chính phủ, Trách nhiệm của Thủ tướng Chính phủ không bao gồm những điều nào?",
    choices: [
      "Chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ và hệ thống hành chính nhà nước từ trung ương đến địa phương; về các quyết định và kết quả thực hiện các quyết định của mình trong phạm vi nhiệm vụ, quyền hạn được giao.",
      "Thực hiện báo cáo công tác của Chính phủ, Thủ tướng Chính phủ; giải trình, trả lời chất vấn trước Quốc hội, Ủy ban thường vụ Quốc hội, trường hợp vắng mặt thì ủy quyền cho Phó Thủ tướng Chính phủ thực hiện.",
      "Thực hiện báo cáo công tác trước Chính phủ, Thủ tướng Chính phủ; giải trình, trả lời chất vấn trước Quốc hội, Ủy ban thường vụ Quốc hội.",
    ],
    correct:
      "Thực hiện báo cáo công tác trước Chính phủ, Thủ tướng Chính phủ; giải trình, trả lời chất vấn trước Quốc hội, Ủy ban thường vụ Quốc hội.",
  },
  {
    question: "43: Vai trò của Phó Thủ tướng Chính phủ là gì?",
    choices: [
      "Phó Thủ tướng Chính phủ giúp Thủ tướng Chính phủ làm nhiệm vụ theo sự phân công của Thủ tướng Chính phủ và chịu trách nhiệm trước Thủ tướng Chính phủ về nhiệm vụ được phân công.",
      "Khi Thủ tướng Chính phủ vắng mặt, một Phó Thủ tướng Chính phủ được Thủ tướng Chính phủ ủy nhiệm thay mặt Thủ tướng Chính phủ lãnh đạo công tác của Chính phủ.",
      "Cả hai phương án trên.",
    ],
    correct: "Cả hai phương án trên.",
  },
  {
    question:
      "44: Chủ thể nào triệu tập và chủ trì các phiên họp của Chính phủ?",
    choices: ["Chủ tịch Quốc hội.", "Chủ tịch nước.", "Thủ tướng chính phủ."],
    correct: "Thủ tướng chính phủ.",
  },
  {
    question: "45: Bộ trưởng, Thủ trưởng cơ quan ngang bộ là:",
    choices: [
      "Thành viên Chính phủ và là người đứng đầu bộ, cơ quan ngang bộ, lãnh đạo công tác của bộ, cơ quan ngang bộ.",
      "Thành viên Chính phủ và là người chịu trách nhiệm quản lý nhà nước về ngành, lĩnh vực được phân công.",
      "Tổ chức thi hành và theo dõi việc thi hành pháp luật liên quan đến ngành, lĩnh vực trong phạm vi toàn quốc.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "46: Nội dung nào sau đây không thuộc nhiệm vụ và quyền hạn của Bộ trưởng, thủ trưởng cơ quan ngang bộ với tư cách là thành viên chính phủ:",
    choices: [
      "Tham gia giải quyết các công việc chung của tập thể Chính phủ; cùng tập thể Chính phủ quyết định và liên đới chịu trách nhiệm các vấn đề thuộc thẩm quyền của Chính phủ.",
      "Đề xuất với Chính phủ, Thủ tướng Chính phủ các chủ trương, chính sách, cơ chế, văn bản pháp luật cần thiết thuộc thẩm quyền của Chính phủ, Thủ tướng Chính phủ.",
      "Xây dựng các dự án luật, dự thảo nghị quyết trình Quốc hội, dự án pháp lệnh, dự thảo nghị quyết trình Ủy ban thường vụ Quốc hội.",
    ],
    correct:
      "Xây dựng các dự án luật, dự thảo nghị quyết trình Quốc hội, dự án pháp lệnh, dự thảo nghị quyết trình Ủy ban thường vụ Quốc hội.",
  },
  {
    question:
      "47: Quyền hạn của Bộ trưởng, Thủ trưởng cơ quan ngang bộ trong việc bổ nhiệm, miễn nhiệm, cách chức, cho từ chức Thứ trưởng hoặc Phó Thủ trưởng cơ quan ngang bộ?",
    choices: [
      "Chủ động, trực tiếp.",
      "Đề nghị Thủ tướng chính phủ.",
      "Kiến nghị với Bộ Nội vụ.",
    ],
    correct: "Đề nghị Thủ tướng chính phủ.",
  },
  {
    question:
      "48: Bộ trưởng, Thủ trưởng cơ quan ngang bộ có quyền kiến nghị với đối tượng nào sau đây về đình chỉ việc thi hành hoặc bãi bỏ những quy định do các cơ quan ban hành trái với Hiến pháp, luật và văn bản của cơ quan nhà nước cấp trên hoặc của bộ, cơ quan ngang bộ về ngành, lĩnh vực do bộ, cơ quan ngang bộ chịu trách nhiệm quản lý?",
    choices: [
      "Bộ trưởng, Thủ trưởng cơ quan ngang bộ khác.",
      "Thủ tướng Chính phủ.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Bộ trưởng, Thủ trưởng cơ quan ngang bộ khác.",
  },
  {
    question:
      "49: Trong trường hợp kiến nghị về đình chỉ việc thi hành hoặc bãi bỏ những quy định do các cơ quan ban hành trái với Hiến pháp, luật và văn bản của cơ quan nhà nước cấp trên hoặc của bộ, cơ quan ngang bộ về ngành, lĩnh vực do bộ, cơ quan ngang bộ chịu trách nhiệm quản lý, mà không được chấp nhận, thì Bộ trưởng và Thủ trưởng cơ quan ngang bộ có thể trình lên đối tượng nào sau đây?",
    choices: ["Chủ tịch nước.", "Bộ trưởng Bộ Nội vụ.", "Thủ tướng Chính phủ."],
    correct: "Thủ tướng Chính phủ.",
  },
  {
    question:
      "50: Các chính sách xã hội được Chính phủ đề ra mang lại lợi ích gì?",
    choices: [
      " 	Nhằm phát triển nguồn nhân lực; hướng nghiệp, tạo việc làm, cải thiện điều kiện làm việc; nâng cao năng suất lao động; bảo vệ quyền, lợi ích hợp pháp của người lao động, người sử dụng lao động.",
      "Xây dựng gia đình Việt Nam bình đẳng, ấm no, hạnh phúc; bảo đảm quyền bình đẳng nam, nữ về chính trị, kinh tế, văn hóa, xã hội và gia đình.",
      " 	Tổ chức và tạo điều kiện cho thanh thiếu niên được học tập, lao động và giải trí, phát triển thể lực, trí tuệ, bồi dưỡng về đạo đức, truyền thống dân tộc, ý thức công dân.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "51: Chính phủ đã có những biện pháp gì để nâng cao khoa học kĩ thuật trong giai đoạn này?",
    choices: [
      "Chỉ đạo thực hiện chính sách, kế hoạch phát triển khoa học và công nghệ; ứng dụng có hiệu quả các thành tựu khoa học và công nghệ.",
      "Huy động các nguồn lực xã hội để phát triển khoa học và công nghệ, đa dạng hóa và sử dụng có hiệu quả các nguồn đầu tư phát triển khoa học và công nghệ.",
      "Xây dựng cơ chế, chính sách để mọi người tham gia và được thụ hưởng lợi ích từ các hoạt động khoa học và công nghệ.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "52: Bộ trưởng, Thủ trưởng cơ quan ngang bộ thực hiện báo cáo công tác và giải trình, trả lời chất vấn trước cơ quan hoặc đối tượng nào sau đây về ngành, lĩnh vực được phân công? (KHOẢN 2 ĐIỀU 37 TRANG 15: 2. Thực hiện báo cáo công tác trước Chính phủ, Thủ tướng Chính phủ; giải trình, trả lời chất vấn trước Quốc hội, Ủy ban Thường vụ Quốc hội.)",
    choices: [
      " 	Chính phủ, Thủ tướng chính phủ.",
      "	Quốc hội, Uỷ ban thường vụ Quốc hội.",
      " Thanh tra chính phủ.",
      "	Câu a và b đúng.",
    ],
    correct: "	Câu a và b đúng.",
  },
  {
    question:
      " 53 : Số lượng Thứ trưởng, Phó Thủ trưởng Bộ Quốc Phòng, Bộ Công An, Bộ Ngoại Giao tối đa không quá? (KHOẢN 2 ĐIỀU 38)",
    choices: [" 	04 người.", "	05 người.", " 	06 người.", "	07 người."],
    correct: " 	06 người.",
  },
  {
    question:
      "54: Số lượng Thứ trưởng, Thứ trưởng, Phó Thủ trưởng cơ quan ngang bộ trong trường hợp do sáp nhập hoặc do yêu cầu điều động, luân chuyển cán bộ của cơ quan có thẩm quyền thì:",
    choices: [
      " Thủ tướng Chính phủ trình Ủy ban thường vụ Quốc hội xem xét, quyết định.",
      "	Thủ tướng chính phủ trình Chủ tịch nước xem xét, quyết định.",
      " Tất cả câu trên đều đúng.",
    ],
    correct:
      " Thủ tướng Chính phủ trình Ủy ban thường vụ Quốc hội xem xét, quyết định.",
  },
  {
    question: "55 : Bộ, cơ quan ngang bộ là:",
    choices: [
      "Cơ quan của Chính phủ thực hiện chức năng quản lý nhà nước về một hoặc một số ngành, lĩnh vực.",
      "Cơ quan của Chính phủ thực hiện chức năng quản lý nhà nước về một hoặc một số ngành, lĩnh vực và dịch vụ công thuộc ngành, lĩnh vực trong phạm vi toàn quốc.",
      "Cơ quan của Chính phủ thực hiện chức năng quản lý nhà nước về một hoặc một số ngành, lĩnh vực và dịch vụ công lẫn tư nhân thuộc ngành, lĩnh vực trong phạm vi toàn quốc.",
    ],
    correct:
      "Cơ quan của Chính phủ thực hiện chức năng quản lý nhà nước về một hoặc một số ngành, lĩnh vực và dịch vụ công thuộc ngành, lĩnh vực trong phạm vi toàn quốc.",
  },
  {
    question:
      "56: Phát triển giáo dục ở miền núi, hải đảo, vùng đồng bào dân tộc thiểu số và vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn; tạo điều kiện để người khuyết tật và người nghèo được học văn hóa và học nghề’ - Biện pháp này mang lại lợi ích gì trong việc phát triển giáo dục và đào tạo của nước ta.",
    choices: [
      "Nâng cao dân trí, đào tạo nguồn nhân lực, thu hút, bồi dưỡng và trọng dụng nhân tài.",
      "	Phát triển giáo dục và đào tạo, tạo điều kiện xây dựng xã hội học tập.",
      " Đô thị hoá các vùng sâu vùng xa.",
      "	Xóa đói giảm nghèo.",
    ],
    correct:
      "	Phát triển giáo dục và đào tạo, tạo điều kiện xây dựng xã hội học tập.",
  },
  {
    question: "57: Cơ quan thuộc Chính phủ là:",
    choices: [
      "Bộ máy giúp việc của Chính phủ, Thủ tướng Chính phủ, có chức năng tham mưu tổng hợp, giúp việc cho Chính phủ.",
      "	Cơ quan do Chính phủ thành lập, chịu trách nhiệm trước Chính phủ, Thủ tướng Chính phủ về nhiệm vụ và quyền hạn được giao.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "	Cơ quan do Chính phủ thành lập, chịu trách nhiệm trước Chính phủ, Thủ tướng Chính phủ về nhiệm vụ và quyền hạn được giao.",
  },
  {
    question: "58: Số lượng cấp phó của người đứng đầu tổng cục không quá:",
    choices: ["03 người.", "	04 người.", " 05 người.", "	06 người."],
    correct: "	04 người.",
  },
  {
    question:
      "59: Đối tượng nào sau đây không phải người đứng đầu Văn phòng Chính phủ?",
    choices: [
      " 	Thủ tướng Chính phủ.",
      "Bộ trưởng, Chủ nhiệm Văn phòng chính phủ.",
      "Cả a và b đều đúng.",
    ],
    correct: "Bộ trưởng, Chủ nhiệm Văn phòng chính phủ.",
  },
  {
    question: "60: Bộ trưởng làm việc bảo đảm nguyên tắc:",
    choices: [
      "Dân chủ tập trung.",
      "Tập trung dân chủ.",
      "Chính xác, minh bạc.",
      "Dân chủ, liêm chính.",
    ],
    correct: "Tập trung dân chủ.",
  },
  {
    question: "61: Chính phủ bao gồm những chức vụ nào?",
    choices: [
      "Thủ tướng Chính phủ và Phó Thủ tướng Chính phủ.",
      "Bộ trưởng và Thủ trưởng cơ quan ngang bộ.",
      "Cả a và b đều đúng.",
    ],
    correct: "Cả a và b đều đúng.",
  },
  {
    question: "62: Cơ cấu tổ chức của Bộ, cơ quan ngang bộ gồm?",
    choices: [
      "Văn phòng, thanh tra, tổng cục, đơn vị sự nghiệp công lập.",
      "	Vụ, văn phòng, thanh tra, tổng cục, đơn vị sự nghiệp công lập.",
      " Vụ, văn phòng, thanh tra, cục, tổng cục, đơn vị sự nghiệp công lập.",
    ],
    correct:
      " Vụ, văn phòng, thanh tra, cục, tổng cục, đơn vị sự nghiệp công lập.",
  },
  {
    question: "63: Nhiệm kỳ của Chính phủ:",
    choices: [
      "Theo nhiệm kỳ của Quốc hội",
      " 05 năm",
      " Theo nhiệm kỳ của Chủ tịch nước",
      " 06 năm",
    ],
    correct: "Theo nhiệm kỳ của Quốc hội",
  },
  {
    question:
      " 64: Số lượng cấp phó của người đứng đầu văn phòng, thanh tra, vụ, cục, tổng cục, đơn vị sự nghiệp công lập thuộc Bộ thực hiện theo quy định của:",
    choices: [
      "Luật Tổ chức Chính quyền địa phương",
      "Hiến pháp",
      "Luật Quốc hội",
      "Luật Tổ chức Chính phủ",
    ],
    correct: "Luật Tổ chức Chính phủ",
  },
  {
    question:
      " 1: Trong trường hợp nào thì cán bộ, công chức được nâng lương trước thời hạn?",
    choices: [
      "   Cán bộ, công chức không hoàn thành nhiệm vụ",
      "   Cán bộ, công chức hoàn thành nhiệm vụ",
      "   Cán bộ, công chức hoàn thành tốt nhiệm vụ",
      "   Cán bộ, công chức có hoàn thành xuất sắc nhiệm vụ",
    ],
    correct: "   Cán bộ, công chức có hoàn thành xuất sắc nhiệm vụ",
  },
  {
    question:
      " 2: Trong trường hợp không bố trí được phương tiện đi lại cho cán bộ, công chức thì:",
    choices: [
      "   Cán bộ, công chức được thanh toán những chi phí đi lại nhằm phục vụ mục đích thi hành công vụ.",
      "   Cán bộ, công chức sử dụng ngân sách cá nhân để thanh toán chi phí đi lại, và chi phí này sẽ không được bù hoàn.",
      "   Cán bộ, công chức được thanh toán chi phí đi lại theo quy định của Chính phủ.",
      "   Câu a và c đúng.",
    ],
    correct: "   Câu a và c đúng.",
  },
  {
    question:
      " 3: Theo Luật cán bộ, công chức 2008, công chức xã có mấy chức danh? (Theo Luật thì 07, còn NĐ 33/2023/NĐ-CP quy định về cán bộ, công chức cấp xã thì chỉ còn 6 chức danh công chức cấp xã từ ngày 01/8/2023)",
    choices: ["     04", "    05", "     06", "    07"],
    correct: "    07",
  },
  {
    question:
      " 4: Theo Luật cán bộ, công chức 2008, Chính phủ thực hiện báo cáo Quốc hội về công tác quản lý cán bộ, công chức định kỳ:",
    choices: ["Hàng tháng", "Hàng quý", "Hàng năm", "    Theo kỳ họp Quốc hội"],
    correct: "Hàng năm",
  },
  {
    question:
      " 5: Công chức vi phạm Luật cán bộ, công chức 2008 và các quy định khác của pháp luật có liên quan thì tùy theo tính chất, mức độ vi phạm phải chịu bao nhiêu hình thức kỷ luật?",
    choices: ["   05", "   07", "   06", "   08"],
    correct: "06",
  },
  {
    question:
      " 6: Theo Luật Cán bộ, công chức năm 2008; đâu là công chức loại D theo quy định của Luật Cán bộ, công chức 2008 sửa đổi 2019?",
    choices: [
      "     Chuyên viên chính.",
      "    Cán sự.",
      "     Chuyên viên.",
      "    Chuyên viên cao cấp.",
    ],
    correct: "    Cán sự.",
  },
  {
    question:
      " 7: Theo Luật cán bộ, công chức 2008, có bao nhiêu nội dung đánh giá công chức?",
    choices: ["     03", "    04", "     05", "    06"],
    correct: "06",
  },
  {
    question:
      " 8: Nội dung nào dưới đây không thuộc quản lý cán bộ, công chức?",
    choices: [
      "   Xây dựng kế hoạch, quy hoạch cán bộ, công chức;",
      "   Ban hành và tổ chức thực hiện văn bản quy bản quy phạm pháp luật về cán bộ, công chức;",
      "   Xây dựng tiêu chuẩn trong quá trình thực hiện công việc;",
      "   Quy định chức danh và cơ cấu cán bộ.",
    ],
    correct: "   Xây dựng tiêu chuẩn trong quá trình thực hiện công việc;",
  },
  {
    question:
      " 9: Công chức bị Tòa án kết án dưới hình thức nào thì đương nhiên bị buộc thôi việc kể từ ngày bản án, quyết định có hiệu lực pháp luật?",
    choices: [
      "   Hưởng án treo, hoặc cải tạo không giam giữ.",
      "   Kết án phạt tù và không được hưởng án treo.",
      "   Bị kết án về tội phạm tham nhũng.",
      "   Câu b và c đúng.",
    ],
    correct: "   Kết án phạt tù và không được hưởng án treo.",
  },
  {
    question:
      " 10: Cán bộ, công chức được miễn trách nhiệm trong trường hợp nào dưới đây?",
    choices: [
      "   Phải chấp hành quyết định trái pháp luật của cấp trên và đã chấp hành mà không báo cáo người ra quyết định.",
      "   Phải chấp hành quyết định trái pháp luật của cấp trên và đã báo cáo người ra quyết định trước khi chấp hành.",
      "   Phải chấp hành quyết định trái pháp luật của cấp trên và đã báo cáo người ra quyết định sau khi chấp hành.",
      "Không chấp hành quyết định trái pháp luật và không báo cáo người ra quyết định.",
    ],
    correct:
      "   Phải chấp hành quyết định trái pháp luật của cấp trên và đã báo cáo người ra quyết định trước khi chấp hành.",
  },
  {
    question:
      " 11: Cán bộ, công chức bị khiển trách hoặc cảnh cáo thì thời hạn nâng lương bị kéo dài bao lâu?",
    choices: ["   06 tháng", "   09 tháng", "   12 tháng", "   24 tháng"],
    correct: "   06 tháng",
  },
  {
    question:
      " 12: Theo Luật cán bộ, công chức năm 2008, 'vị trí việc làm' là?",
    choices: [
      "     Vị trí việc làm là công việc gắn với chức danh, chức vụ, cơ cấu và ngạch công chức để xác định biên chế và bố trí công chức trong cơ quan, tổ  chức, đơn vị",
      " Vị trí việc làm là để xác định biên chế và bố trí công chức trong cơ quan, tổ  chức, đơn vị",
      " Vị trí việc làm là công việc gắn với chức danh, chức vụ, để xác định biên chế và bố trí công chức trong cơ quan, tổ chức, đơn vị",
      " Tất cả câu trên đều đúng.",
    ],
    correct: " Tất cả câu trên đều đúng.",
  },
  {
    question: " 13: Theo luật Cán bộ, Công chức 2008, 'giáng chức' là gì?",
    choices: [
      "     Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
      "    Việc cán bộ không được tiếp tục giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "     Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      "    Việc cán bộ, công chức được quyết định giữ một chức vụ lãnh đạo, quản lý hoặc một ngạch theo quy định của pháp luật.",
    ],
    correct:
      "     Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
  },
  {
    question:
      " 14: Cán bộ, công chức bị kỷ luật giáng chức hoặc cách chức thì thời hạn nâng lương bị kéo dài bao lâu?",
    choices: ["     06 tháng", " 09 tháng", " 12 tháng", " 24 tháng"],
    correct: " 12 tháng",
  },
  {
    question:
      " 15: Theo Luật cán bộ, công chức 2008, công chức có bao nhiêu năm xếp loại chất lượng ở mức không hoàn thành nhiệm vụ thì cơ quan, tổ chức, đơn vị có thẩm quyền giải quyết thôi việc?",
    choices: ["   02 năm", " 03 năm", " 04 năm", " 05 năm"],
    correct: "   02 năm",
  },
  {
    question:
      " 16: Theo luật Cán bộ, công chức 2008; có bao nhiêu nguyên tắc trong thi hành công vụ?",
    choices: ["   04", "   05", "   06", "   07"],
    correct: "05",
  },
  {
    question:
      " 17: Theo Luật cán bộ, công chức 2008, văn hóa giao tiếp với nhân dân của cán bộ, công chức là:",
    choices: [
      "   Có tác phong, thái độ lịch sự, nghiêm túc, khiêm tốn.",
      "   Công bằng, vô tư, khách quan khi nhận xét, đánh giá.",
      "   Có tác phong lịch sự.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Có tác phong, thái độ lịch sự, nghiêm túc, khiêm tốn.",
  },
  {
    question:
      " 18: Theo Luật cán bộ, công chức 2008, cơ quan nào chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về công chức?",
    choices: [
      "   Bộ Tư pháp",
      "   Mặt trận Tổ quốc Việt Nam",
      "   Chính phủ",
      "   Bộ Nội vụ",
    ],
    correct: "   Bộ Nội vụ",
  },
  {
    question:
      " 19: Theo Luật cán bộ, công chức 2008, có bao nhiêu nội dung quy định quyền của cán bộ, công chức được bảo đảm các điều kiện thi hành công vụ?",
    choices: ["     04", "    05", "     06", "    07"],
    correct: "05",
  },
  {
    question:
      " 20: Căn cứ Luật sửa đổi, bổ sung Luật CBCC 2019, đâu không phải nội dung đánh giá công chức?",
    choices: [
      "     Phẩm chất chính trị.",
      "    Thái độ phục vụ nhân dân.",
      "     Tinh thần trách nhiệm và phối hợp trong thực hiện nhiệm vụ.",
      "    Tiến độ và kết quả thực hiện nhiệm vụ.",
    ],
    correct: "    Tiến độ và kết quả thực hiện nhiệm vụ.",
  },
  {
    question:
      " 21: Theo Luật cán bộ, công chức 2008, cơ quan nào có thẩm quyền quyết định biên chế công chức của Văn phòng Quốc hội, Kiểm toán nhà nước, Viện kiểm sát nhân dân?",
    choices: [
      "     Quốc hội",
      "    Chính phủ",
      "     Ủy ban Thường vụ Quốc hội",
      "    Chủ tịch nước",
    ],
    correct: "     Ủy ban Thường vụ Quốc hội",
  },
  {
    question:
      "22: Cơ quan nào bố trí phương tiện đi lại cho cán bộ, công chức để thi hành công vụ?",
    choices: [
      "   Sở Nội vụ",
      "   Phòng hậu cần – kỹ thuật của cơ quan, đơn vị, tổ chức",
      "   Nhà nước",
      "   Phòng quản lý cán bộ, công chức",
    ],
    correct: "   Nhà nước",
  },
  {
    question:
      "23: Hình thức kỷ luật nào dưới đây không được áp dụng để xử lý kỷ luật cán bộ vi phạm quy định của Luật cán bộ, công chức 2008 và các quy định khác của pháp luật có liên quan tùy theo tính chất, mức độ vi phạm?",
    choices: [
      "   Khiển trách",
      "   Cảnh cáo",
      "   Hạ bậc lương",
      "   Cách chức",
    ],
    correct: "   Hạ bậc lương",
  },
  {
    question:
      "24: Theo Luật cán bộ, công chức 2008, hình thức kỷ luật 'Cách chức' chỉ áp dụng với đối tượng nào:",
    choices: [
      "     Viên chức không giữ chức vụ lãnh đạo, quản lý.",
      "    Cán bộ giữ chức vụ lãnh đạo, quản lý.",
      "     Công chức giữ chức vụ lãnh đạo, quản lý.",
      "    Cán bộ không giữ chức vụ lãnh đạo, quản lý.",
    ],
    correct: "     Công chức giữ chức vụ lãnh đạo, quản lý.",
  },
  {
    question:
      "25: Theo Luật cán bộ, công chức 2008, cá nhân nào có quyền sử dụng nhà ở công vụ?",
    choices: [
      "     Công chức giữ chức vụ quản lý, lãnh đạo",
      "   Cán bộ, công chức được điều động, luân chuyển, biệt phái thuê trong thời gian đảm nhiệm công tác",
      "     Cán bộ giữ chức vụ quản lý, lãnh đạo",
      "    Viên chức",
    ],
    correct:
      "   Cán bộ, công chức được điều động, luân chuyển, biệt phái thuê trong thời gian đảm nhiệm công tác",
  },
  {
    question:
      "26: Theo Luật cán bộ, công chức 2008, cơ quan nào quy định cụ thể việc luân chuyển công chức?",
    choices: [
      "     Quốc hội",
      "    Chính phủ",
      "     Bộ nội vụ",
      "    Văn phòng chính phủ",
    ],
    correct: "    Chính phủ",
  },
  {
    question:
      "27: Theo Luật Cán bộ, công chức năm 2008, đâu là công chức loại A theo quy định của Luật Cán bộ, công chức 2008 sửa đổi 2019?",
    choices: [
      "     Chuyên viên chính.",
      "    Cán sự.",
      "     Chuyên viên.",
      "    Chuyên viên cao cấp.",
    ],
    correct: "    Chuyên viên cao cấp.",
  },
  {
    question:
      '28: Theo luật Cán bộ, công chức 2008, "việc bảo đảm sự lãnh đạo của Đảng Cộng sản Việt Nam, sự quản lý của Nhà nước" là một trong các:',
    choices: [
      "     Nguyên tắc quản lý cán bộ, công chức.",
      "    Nguyên tắc tuyển dụng công chức.",
      "     Nguyên tắc trong thi hành công vụ.",
      "    Nghĩa vụ của cán bộ, công chức trong thi hành công vụ.",
    ],
    correct: "     Nguyên tắc quản lý cán bộ, công chức.",
  },
  {
    question:
      "29: Theo Luật cán bộ, công chức 2008, yêu cầu đối với công chức được điều động là?",
    choices: [
      "     Phải đạt yêu cầu về chuyên môn, nghiệp vụ phù hợp với vị trí việc làm mới.",
      "    Phải có kết quả đánh giá công chức hàng năm đạt loại tốt.",
      "     Phải am hiểu kiến thức chuyên môn, nghiệp vụ vị trí việc làm mới.",
      "    Phải có kết quả đánh giá công chức hàng năm đạt loại xuất sắc.",
    ],
    correct:
      "     Phải đạt yêu cầu về chuyên môn, nghiệp vụ phù hợp với vị trí việc làm mới.",
  },
  {
    question: '30: Theo luật Cán bộ, Công chức 2008, "ngạch công chức" là gì?',
    choices: [
      "    Tên gọi thể hiện thứ bậc về năng lực và trình độ chuyên môn, nghiệp vụ của công chức.",
      "    Tên gọi thể hiện yêu cầu về trình độ, chuyên môn của người dự tuyển công chức.",
      "     Tên gọi thể hiện trật tự, thứ bậc trong cơ quan hành chính, nhà nước các cấp.",
      "    Tên thể hiện yêu cầu vị trí việc làm trong cơ quan hành chính nhà nước.",
    ],
    correct:
      "    Tên gọi thể hiện thứ bậc về năng lực và trình độ chuyên môn, nghiệp vụ của công chức.",
  },
  {
    question:
      "31: Nội dung nào sau đây không phải nghĩa vụ của cán bộ công chức là người đứng đầu?",
    choices: [
      "  Chỉ đạo tổ chức thực hiện nhiệm vụ được giao và chịu trách nhiệm về kết quả hoạt động của cơ quan, tổ chức, đơn vị.",
      "  Kiểm tra đôn đốc, hướng dẫn việc thi hành công vụ của cán bộ công chức.",
      "  Tổ chức thực hiện các biện pháp phòng, chống quan liêu, tham nhũng, thực hành tiết kiệm, chống lãng phí và chịu trách nhiệm về việc để xảy ra quan liêu, tham nhũng, lãng phí trong cơ quan, tổ chức, đơn vị.",
      "  Sử dụng tài sản Nhà nước trái pháp luật.",
    ],
    correct: "  Sử dụng tài sản Nhà nước trái pháp luật.",
  },
  {
    question:
      "33: Trường hợp kỷ luật bằng hình thức khiển trách thì không thực hiện nâng ngạch, quy hoạch, đào tạo, bổ nhiệm trong thời gian bao lâu?",
    choices: [
      "     09 tháng",
      "     11 tháng",
      "     12 tháng",
      "     15 tháng",
    ],
    correct: "    12 tháng",
  },
  {
    question:
      "34: Theo Luật cán bộ, công chức 2008, đạo đức của cán bộ, công chức là?",
    choices: [
      "    Ngôn ngữ giao tiếp phải chuẩn mực, rõ ràng, mạch lạc.",
      "    Có tác phong lịch sự; giữ gìn uy tín, danh dự cho cơ quan, tổ chức, đơn vị và đồng nghiệp.",
      "    Công bằng, vô tư, khách quan.",
      "    Cán bộ, công chức phải thực hiện cần, kiệm, liêm, chính, chí công vô tư trong hoạt động công vụ.",
    ],
    correct:
      "   Cán bộ, công chức phải thực hiện cần, kiệm, liêm, chính, chí công vô tư trong hoạt động công vụ.",
  },
  {
    question:
      "35: Theo Luật cán bộ, công chức năm 2008 và sửa đổi, bổ sung luật CBCC 2019, “điều động” là gì?",
    choices: [
      "    Công chức được cơ quan có thẩm quyền quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
      "    Cán bộ, công chức lãnh đạo, quản lý được cơ quan có thẩm quyền quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
      "    Cán bộ, công chức được cơ quan có thẩm quyền quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
      "    Cán bộ, công chức lãnh đạo, quản lý được cơ quan quản lý quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
    ],
    correct:
      "     Công chức được cơ quan có thẩm quyền quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
  },
  {
    question:
      " 36: Theo Luật cán bộ, công chức 2008, nội dung nào dưới đây không được quy định trong việc cán bộ, công chức không được làm liên quan đến bí mật nhà nước?",
    choices: [
      "     Cán bộ, công chức không được tiết lộ thông tin liên quan đến bí mật nhà nước dưới mọi hình thức.",
      "    Cán bộ, công chức làm việc ở ngành, nghề có liên quan đến bí mật nhà nước thì trong thời hạn ít nhất là 05 năm, kể từ khi có quyết định nghỉ hưu, thôi việc, không được làm công việc có liên quan đến ngành, nghề mà trước đây mình đã đảm nhiệm cho tổ chức, cá nhân trong nước, tổ chức, cá nhân nước ngoài hoặc liên doanh với nước ngoài.",
      "  Chính phủ quy định cụ thể danh mục ngành, nghề, công việc, thời hạn mà cán bộ, công chức không được làm và chính sách đối với những người phải áp dụng quy định tại Điều này.",
      "   Sử dụng tài sản của Nhà nước và của nhân dân trái pháp luật.",
    ],
    correct: "   Sử dụng tài sản của Nhà nước và của nhân dân trái pháp luật.",
  },

  {
    question:
      " 37: Theo Luật cán bộ, công chức 2008, trong văn hóa giao tiếp với nhân dân, là công chức, anh/chị cần thực hiện quy định nào:",
    choices: [
      "     Không được hách dịch, cửa quyền, gây khó khăn, phiền hà cho nhân dân khi thi hành công vụ.",
      "    Thực hiện dân chủ, tận tụy với nhân dân.",
      "     Lắng nghe ý kiến của nhân dân.",
      "    Chịu sự giám sát của nhân dân.",
    ],
    correct:
      "     Không được hách dịch, cửa quyền, gây khó khăn, phiền hà cho nhân dân khi thi hành công vụ.",
  },
  {
    question:
      " 38: Theo Luật Cán bộ, công chức năm 2008, những người nào không được đăng ký dự tuyển công chức?",
    choices: [
      "     Không cư trú tại Việt Nam.",
      "    Có một quốc tịch là quốc tịch Việt Nam.",
      "     Có đơn dự tuyển; có lý lịch rõ ràng.",
      "    Có văn bằng, chứng chỉ phù hợp.",
    ],
    correct: "     Không cư trú tại Việt Nam.",
  },
  {
    question:
      " 39: Theo Luật cán bộ, công chức 2008, cơ quan tổ chức, đơn vị quản lý công chức phải ra quyết định nghỉ hưu trước bao lâu tính đến ngày công chức nghỉ hưu?",
    choices: ["     03 tháng", "    06 tháng", "     09 tháng", "    12 tháng"],
    correct: "     03 tháng",
  },
  {
    question: " 40: Việc quản lý cán bộ, công chức được thực hiện theo:",
    choices: [
      "   Quy định của Luật CBCC và các quy định khác của pháp luật có liên quan;",
      "   Điều lệ của Đảng Cộng sản Việt Nam;",
      "   Văn bản của cơ quan, tổ chức có thẩm quyền;",
      "   Tất cả đều đúng.",
    ],
    correct:
      "   Quy định của Luật CBCC và các quy định khác của pháp luật có liên quan;",
  },
  {
    question:
      " 41: Căn cứ Luật sửa đổi bổ sung Luật CBCC 2019, hình thức hạ bậc lương áp dụng với đối tượng nào sau đây?",
    choices: [
      "   Công chức giữ chức vụ lãnh đạo, quản lý.",
      "   Công chức không giữ chức vụ lãnh đạo, quản lý.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Công chức không giữ chức vụ lãnh đạo, quản lý.",
  },
  {
    question:
      " 42: Theo Luật cán bộ, công chức 2008, đâu là quyền của cán bộ, công chức về nghỉ ngơi?",
    choices: [
      "     Trường hợp do yêu cầu nhiệm vụ, cán bộ, công chức không sử dụng hoặc sử dụng không hết số ngày nghỉ hàng năm thì ngoài tiền lương sẽ không được thanh toán thêm một khoản tiền bằng tiền lương cho những ngày không nghỉ.",
      " Được hưởng tiền làm thêm giờ, tiền làm đêm, công tác phí và các chế độ khác theo quy định của pháp luật.",
      "     Cán bộ, công chức được nghỉ hàng năm, nghỉ lễ, nghỉ để giải quyết việc riêng theo quy định của pháp luật về lao động.",
      "    Được đào tạo, bồi dưỡng nâng cao trình độ chính trị, chuyên môn, nghiệp vụ.",
    ],
    correct:
      "     Cán bộ, công chức được nghỉ hàng năm, nghỉ lễ, nghỉ để giải quyết việc riêng theo quy định của pháp luật về lao động.",
  },
  {
    question:
      " 43: Theo Luật cán bộ, công chức 2008, cơ quan tổ chức, đơn vị quản lý công chức phải có thông báo bằng văn bản về thời điểm nghỉ hưu trước bao nhiêu tháng tính đến ngày công chức nghỉ hưu?",
    choices: ["     03 tháng", "    06 tháng", "     09 tháng", "    12 tháng"],
    correct: "    06 tháng",
  },
  {
    question:
      " 44: Theo Luật cán bộ, công chức 2008, cơ quan, tổ chức nào đầu tư xây dựng công sở cho cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội?",
    choices: [" Quốc hội", " Doanh nghiệp", " Bộ xây dựng", " Nhà nước"],
    correct: " Nhà nước",
  },
  {
    question: " 45: Theo luật Cán bộ, Công chức 2008, 'miễn nhiệm' là gì?",
    choices: [
      " Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      " Việc cán bộ, công chức được quyết định giữ một chức vụ lãnh đạo, quản lý hoặc một ngạch theo quy định của pháp luật.",
      " Việc cán bộ không được tiếp tục giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      " Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
    ],
    correct:
      " Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
  },
  {
    question:
      " 46: Nội dung nào sau đây là đúng về nguyên tắc quản lý cán bộ, công chức?",
    choices: [
      "     Bảo đảm sự lãnh đạo của Đảng cộng sản Việt Nam, sự quản lý của nhà nước.",
      "    Kết hợp giữa tiêu chuẩn chức danh, vị trí việc làm và chỉ tiêu biên chế.",
      "     Cả a và b đúng.",
      "    Cả a và b sai.",
    ],
    correct: "     Cả a và b đúng.",
  },
  {
    question:
      " 47: Theo Luật cán bộ, công chức 2008, đâu không phải quyền của cán bộ, công chức về tiền lương và các chế độ liên quan đến tiền lương?",
    choices: [
      " Được Nhà nước bảo đảm tiền lương tương xứng với nhiệm vụ, quyền hạn được giao, phù hợp với điều kiện kinh tế - xã hội của đất nước.",
      " Được hưởng tiền làm thêm giờ, tiền làm đêm, công tác phí và các chế độ khác theo quy định của pháp luật.",
      " Cán bộ, công chức làm việc ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn hoặc trong các ngành, nghề có môi trường độc hại, nguy hiểm được hưởng phụ cấp và chính sách ưu đãi theo quy định của pháp luật.",
      " Được đào tạo, bồi dưỡng nâng cao trình độ chính trị, chuyên môn, nghiệp vụ.",
    ],
    correct:
      " Được đào tạo, bồi dưỡng nâng cao trình độ chính trị, chuyên môn, nghiệp vụ.",
  },
  {
    question:
      " 48: Theo Luật Cán bộ, công chức năm 2008, nội dung nào sau đây không được quy định trong chuyển ngạch công chức?",
    choices: [
      "   Công chức được chuyển ngạch phải có đủ tiêu chuẩn chuyên môn, nghiệp vụ của ngạch được chuyển và phù hợp với nhiệm vụ, quyền hạn được giao.",
      "   Được thực hiện nâng ngạch, nâng lương khi chuyển ngạch.",
      "   Công chức được giao nhiệm vụ không phù hợp với chuyên môn, nghiệp vụ của ngạch công chức đang giữ thì phải được chuyển ngạch cho phù hợp.",
      "   Không thực hiện nâng ngạch, nâng lương khi chuyển ngạch.",
    ],
    correct: "   Được thực hiện nâng ngạch, nâng lương khi chuyển ngạch.",
  },
  {
    question:
      " 49: Theo Luật cán bộ, công chức 2008, có bao nhiêu nội dung quản lý cán bộ, công chức?",
    choices: ["03 nội dung", "04 nội dung", "05 nội dung", "06 nội dung"],
    correct: "05 nội dung",
  },
  {
    question:
      " 50: Cơ quan thanh tra nào dưới đây không thực hiện chức năng thanh tra chuyên ngành trong phạm vi thanh tra công vụ theo Luật cán bộ, công chức 2008?",
    choices: [
      "Thanh tra Bộ Nội vụ",
      "Thanh tra Sở Nội vụ",
      "Thanh tra tỉnh",
      "Tất cả câu trên đều sai.",
    ],
    correct: "Thanh tra tỉnh",
  },
  {
    question:
      " 51: Thời gian cán bộ, công chức bị tạm giữ, tạm giam để phục vụ công tác điều tra, truy tố, xét xử thì được coi là:",
    choices: [
      "   Nghỉ việc không có lý do; hết thời hạn tạm đình chỉ công tác nếu cán bộ, công chức không bị xử lý kỷ luật thì được tiếp tục bố trí làm việc ở vị trí cũ.",
      " Nghỉ việc có lý do; hết thời hạn tạm đình chỉ công tác nếu cán bộ, công chức không bị xử lý kỷ luật thì được tiếp tục bố trí làm việc ở vị trí cũ.",
      "   Tùy trường hợp, mức độ vụ án điều tra",
    ],
    correct:
      " Nghỉ việc có lý do; hết thời hạn tạm đình chỉ công tác nếu cán bộ, công chức không bị xử lý kỷ luật thì được tiếp tục bố trí làm việc ở vị trí cũ.",
  },
  {
    question:
      " 52: Theo Luật cán bộ, công chức 2008, công chức đã được đào tạo, bồi dưỡng nếu tự ý bỏ việc, xin thôi việc thì phải có trách nhiệm đền bù khoản chi phí nào?",
    choices: [
      "     Tiền tàu xe, tiền công tác phí.",
      "    Toàn bộ chi phí đào tạo, bồi dưỡng và tiền lương, phụ cấp.",
      "     Chi phí đào tạo, bồi dưỡng theo quy định của pháp luật.",
      "    Tiền lương, phụ cấp trong thời gian đào tạo, bồi dưỡng.",
    ],
    correct: "     Chi phí đào tạo, bồi dưỡng theo quy định của pháp luật.",
  },
  {
    question:
      " 53: Theo Luật Cán bộ, công chức năm 2008, căn cứ vào ngạch được bổ nhiệm, những người được bổ nhiệm vào ngạch chuyên viên cao cấp hoặc tương đương thuộc công chức loại gì?",
    choices: [" Loại A.", " Loại B.", " Loại C.", " Loại D."],
    correct: " Loại A.",
  },
  {
    question:
      " 54: Theo Luật cán bộ, công chức 2008, văn hóa giao tiếp ở công sở của cán bộ, công chức là:",
    choices: [
      "     Cán bộ, công chức phải thực hiện cần, kiệm, liêm, chính, chí công vô tư trong hoạt động công vụ.",
      "    Có thái độ lịch sự, tôn trọng đồng nghiệp; ngôn ngữ giao tiếp phải chuẩn mực, rõ ràng, mạch lạc.",
      "     Cán bộ, công chức không được hách dịch, cửa quyền.",
      "    Có tác phong, thái độ lịch sự, nghiêm túc, khiêm tốn.",
    ],
    correct:
      "    Có thái độ lịch sự, tôn trọng đồng nghiệp; ngôn ngữ giao tiếp phải chuẩn mực, rõ ràng, mạch lạc.",
  },
  {
    question:
      " 55: Theo Luật Cán bộ, công chức năm 2008 và sửa đổi, bổ sung luật CBCC 2019, nội dung nào dưới đây không được quy định trong nghĩa vụ của cán bộ, công chức đối với Đảng, Nhà nước và nhân dân?",
    choices: [
      "     Trung thành với Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam; bảo vệ danh dự Tổ quốc và lợi ích quốc gia; Tôn trọng Hiến pháp và pháp luật.",
      "    Tôn trọng nhân dân, tận tụy phục vụ nhân dân.",
      "   Liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến và chịu sự giám sát của nhân dân.",
      "    Tất cả câu trên đều sai.",
    ],
    correct:
      "     Trung thành với Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam; bảo vệ danh dự Tổ quốc và lợi ích quốc gia; Tôn trọng Hiến pháp và pháp luật.",
  },
  {
    question:
      " 56: Trong trường hợp đặc biệt, người đứng đầu cơ quan, tổ chức có thể?",
    choices: [
      "     Ủy quyền cho người đứng đầu, cấp phó người đứng đầu cơ quan, tổ chức, đơn vị thuộc cơ cấu tổ chức của mình ký thừa ủy quyền một số văn bản mà mình phải ký",
      "Ủy quyền cho người đứng đầu cơ quan, tổ chức, đơn vị ký thừa ủy quyền một số văn bản mà mình phải ký",
      "     Ủy quyền cho người đứng đầu cơ quan, tổ chức, đơn vị thuộc cơ cấu tổ chức của mình ký thừa ủy quyền một số văn bản mà mình phải ký",
      "    Tất cả đều đúng",
    ],
    correct:
      "     Ủy quyền cho người đứng đầu cơ quan, tổ chức, đơn vị thuộc cơ cấu tổ chức của mình ký thừa ủy quyền một số văn bản mà mình phải ký",
  },
  {
    question:
      " 57: Anh chị hãy cho biết luật cán bộ công chức được áp dụng cho những đối tượng nào?",
    choices: [
      "     Cán bộ",
      "    Công chức",
      "     Cả a và b đúng",
      "   Cả a và b sai",
    ],
    correct: "     Cả a và b đúng",
  },
  {
    question:
      " 58: Theo Luật Cán bộ, công chức năm 2008, đâu không phải là nghĩa vụ của cán bộ, công chức trong thi hành công vụ?",
    choices: [
      "     Thực hiện đúng, đầy đủ và chịu trách nhiệm về kết quả thực hiện nhiệm vụ, quyền hạn được giao.",
      "    Chủ động và phối hợp chặt chẽ trong thi hành công vụ; giữ gìn đoàn kết trong cơ quan, tổ chức, đơn vị.",
      "     Bảo vệ, quản lý và sử dụng hiệu quả, tiết kiệm tài sản nhà nước được giao.",
      "    Tôn trọng nhân dân, tận tụy phục vụ nhân dân.",
    ],
    correct: "    Tôn trọng nhân dân, tận tụy phục vụ nhân dân.",
  },
  {
    question:
      " 59: Theo Luật Cán bộ, công chức năm 2008, đâu không phải là nguyên tắc trong tuyển dụng công chức?",
    choices: [
      "     Bảo đảm công khai, minh bạch, khách quan và đúng pháp luật.",
      "    Bảo đảm tính bí mật.",
      "     Bảo đảm tính cạnh tranh.",
      "    Ưu tiên tuyển chọn người có tài năng, người có công với nước, người dân tộc thiểu số.",
    ],
    correct: "    Bảo đảm tính bí mật.",
  },
  {
    question:
      " 60: Cán bộ, công chức được khen thưởng do có thành tích xuất sắc hoặc công trạng thì được:",
    choices: [
      "   Nâng lương trước thời hạn.",
      "   Ưu tiên khi xem xét bổ nhiệm chức vụ cao hơn.",
      "   Được trực tiếp bổ nhiệm chức vụ cao hơn.",
      "   Câu a và b đúng",
    ],
    correct: "   Câu a và b đúng",
  },
  {
    question:
      " 61: Theo Luật cán bộ, công chức năm 2008 và sửa đổi, bổ sung luật CBCC 2019, 'biệt phái' là gì?",
    choices: [
      "     Cán bộ, công chức của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
      "    Cán bộ của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
      "     Cán bộ, công chức lãnh đạo, quản lý của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
      "    Công chức của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
    ],
    correct:
      "    Công chức của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
  },
  {
    question:
      " 62: Có bao nhiêu hình thức kỷ luật được áp dụng để xử lý kỷ luật cán bộ vi phạm quy định của Luật cán bộ, công chức 2008 và các quy định khác của pháp luật có liên quan?",
    choices: ["   05", "   06", "   04", "   03"],
    correct: "04",
  },
  {
    question:
      " 63: Thời hiệu xử lý kỷ luật cán bộ, công chức trường hợp không có tình tiết phức tạp là bao lâu?",
    choices: ["   60 ngày", "   50 ngày", "   30 ngày", "   90 ngày"],
    correct: "90 ngày",
  },
  {
    question: " 64: Câu nào sau đây đúng?",
    choices: [
      "   Việc khen thưởng, kỷ luật cán bộ, công chức được lưu vào hồ sơ cán bộ, công chức.",
      "   Chỉ việc kỷ luật cán bộ, công chức được lưu vào hồ sơ cán bộ, công chức.",
      "   Chỉ việc khen thưởng cán bộ, công chức được lưu vào hồ sơ cán bộ, công chức.",
      "   Tất cả câu trên đều sai.",
    ],
    correct:
      "   Việc khen thưởng, kỷ luật cán bộ, công chức được lưu vào hồ sơ cán bộ, công chức.",
  },
  {
    question: " 65: Theo Luật cán bộ, công chức năm 2008, 'công chức' là?",
    choices: [
      "     Công dân Việt Nam, được tuyển dụng, bổ nhiệm vào ngạch, chức vụ, chức danh trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, cấp tỉnh, cấp huyện; trong cơ quan, đơn vị thuộc Quân đội nhân dân mà không phải là sĩ quan, quân nhân chuyên nghiệp, công nhân quốc phòng; trong cơ quan, đơn vị thuộc Công an nhân dân mà không phải là sĩ quan, hạ sĩ quan phục vụ theo chế độ chuyên nghiệp, công nhân công an. Trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "    Người Việt Nam, được tuyển dụng, bổ nhiệm vào ngạch, chức vụ, chức danh trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, cấp tỉnh, cấp huyện; trong cơ quan, đơn vị thuộc Quân đội nhân dân mà không phải là sĩ quan, quân nhân chuyên nghiệp, công nhân quốc phòng; trong cơ quan, đơn vị thuộc Công an nhân dân mà không phải là sĩ quan, hạ sĩ quan chuyên nghiệp và trong bộ máy lãnh đạo, quản lý của đơn vị sự nghiệp công lập của Đảng Cộng sản Việt Nam, Nhà nước, tô chức chính trị - xã hội (sau đây gọi chung là đơn vị sự nghiệp công lập), trong biên chê và hưởng lương từ ngân sách nhà nước; đối với công chức trong bộ máy lãnh đạo, quản lý của đơn vị sự nghiệp công lập thì lương được bảo đảm từ quỹ lương của đơn vị sự nghiệp công lập theo quy định của pháp luật.",
      "     Người được tuyển dụng, bổ nhiệm vào ngạch, chức vụ, chức danh trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, cấp tỉnh, cấp huyện; trong cơ quan, đơn vị thuộc Quân đội nhân dân mà không phải là sĩ quan, quân nhân chuyên nghiệp, công nhân quốc phòng; trong cơ quan, đơn vị thuộc Công an nhân dân mà không phải là sĩ quan, hạ sĩ quan chuyên nghiệp và trong bộ máy lãnh đạo, quản lý của đơn vị sự nghiệp công lập của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội (sau đây gọi chung là đơn vị sự nghiệp công lập), trong biên chê và hưởng lương từ ngân sách nhà nước; đối với công chức trong bộ máy lãnh đạo, quản lý của đơn vị sự nghiệp công lập thì lương được bảo đảm từ quỹ lương của đơn vị sự nghiệp công lập theo quy định của pháp luật.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct:
      "     Công dân Việt Nam, được tuyển dụng, bổ nhiệm vào ngạch, chức vụ, chức danh trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, cấp tỉnh, cấp huyện; trong cơ quan, đơn vị thuộc Quân đội nhân dân mà không phải là sĩ quan, quân nhân chuyên nghiệp, công nhân quốc phòng; trong cơ quan, đơn vị thuộc Công an nhân dân mà không phải là sĩ quan, hạ sĩ quan phục vụ theo chế độ chuyên nghiệp, công nhân công an. Trong biên chế và hưởng lương từ ngân sách nhà nước.",
  },
  {
    question:
      " 66: Nội dung nào sau đây là đúng về chính sách đối với người có tài năng?",
    choices: [
      "     Nhà nước có chính sách để phát hiện, thu hút đối với người có tài năng",
      "    Nhà nước bồi dưỡng, trọng dụng đối với người có tài năng",
      "     Nhà nước đãi ngộ xứng đáng đối với người có tài năng",
      "    Tất cả câu trên đều đúng.",
    ],
    correct: "    Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 67: Theo Luật Cán bộ, công chức năm 2008, 'chuyển ngạch' là gì?",
    choices: [
      "     Việc công chức đang giữ ngạch của ngành chuyên môn này được bổ nhiệm sang ngạch của ngành chuyên môn khác có cùng thứ bậc về chuyên môn, nghiệp vụ.",
      "    Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
      "     Việc cán bộ, công chức lãnh đạo, quản lý đề nghị được thôi giữ chức vụ khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      "   Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
    ],
    correct:
      "     Việc công chức đang giữ ngạch của ngành chuyên môn này được bổ nhiệm sang ngạch của ngành chuyên môn khác có cùng thứ bậc về chuyên môn, nghiệp vụ.",
  },
  {
    question: " 68: Tiêu chí thiết kế công sở bao gồm:",
    choices: [
      "   Phù hợp với chức năng, nhiệm vụ, tổ chức bộ máy của cơ quan, tổ chức, đơn;",
      "   Được cơ quan nhà nước có thẩm quyền phê duyệt và tiêu chuẩn, định mức sử dụng;",
      "   Phù hợp về hình thức và mĩ quan;",
      "   Câu a và b đúng.",
    ],
    correct: "   Câu a và b đúng.",
  },
  {
    question: " 69: Theo luật Cán bộ Công chức 2008, 'bãi nhiệm' là gì?",
    choices: [
      "    Việc cán bộ không được giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "   Việc công chức không được giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "   Việc công chức giữ chức vụ lãnh đạo, quản lý không được giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "    Việc viên chức giữ chức vụ lãnh đạo, quản lý không được giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
    ],
    correct:
      "    Việc cán bộ không được giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
  },
  {
    question:
      " 70: Nội dung nào sau đây là nghĩa vụ của cán bộ, công chức là người đứng đầu?",
    choices: [
      "   Tổ chức thực hiện các quy định của pháp luật về dân chủ cơ sở, văn hóa công sở trong cơ quan, tổ chức, đơn vị; xử lý kịp thời, nghiêm minh cán bộ, công chức thuộc quyền quản lý có hành vi vi phạm kỷ luật, pháp luật, có thái độ quan liêu, hách dịch, cửa quyền, gây phiền hà cho công dân.",
      "   Giải quyết kịp thời, đúng pháp luật, theo thẩm quyền hoặc kiến nghị cơ quan có thẩm quyền giải quyết khiếu nại, tố cáo và kiến nghị của cá nhân, tổ chức.",
      "   Kiểm tra, đôn đốc, hướng dẫn việc thi hành công vụ của cán bộ, công chức.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 71: Theo Luật Cán bộ, công chức năm 2008, đâu không phải điều kiện đăng ký dự tuyển công chức?",
    choices: [
      "     Có văn bằng, chứng chỉ phù hợp.",
      "    Có phẩm chất chính trị, đạo đức tốt.",
      "     Có trình độ phù hợp vị trí việc làm.",
      "    Đủ sức khỏe để thực hiện nhiệm vụ.",
    ],
    correct: "     Có trình độ phù hợp vị trí việc làm.",
  },
  {
    question:
      " 72: Nội dung nào sau đây không thuộc trách nhiệm của người đứng đầu cơ quan, tổ chức, đơn vị về quản lý trang thiết bị:",
    choices: [
      "   Xây dựng quy chế quản lý trang thiết bị làm việc.",
      "   Đảm bảo hiệu quả, tiết kiệm.",
      "   Đảm bảo chất lượng, giá cả hợp lý với ngân sách cơ quan, tổ chức, đơn vị.",
      "   Tất cả câu trên đều sai.",
    ],
    correct:
      "   Đảm bảo chất lượng, giá cả hợp lý với ngân sách cơ quan, tổ chức, đơn vị.",
  },
  {
    question: " 73: Theo luật Cán bộ, Công chức 2008, 'bổ nhiệm' là gì?",
    choices: [
      "     Việc cán bộ, công chức được quyết định giữ một chức vụ lãnh đạo, quản lý hoặc một ngạch theo quy định của pháp luật.",
      "    Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      "     Việc cán bộ không được tiếp tục giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "    Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
    ],
    correct:
      "     Việc cán bộ, công chức được quyết định giữ một chức vụ lãnh đạo, quản lý hoặc một ngạch theo quy định của pháp luật.",
  },
  {
    question:
      " 74: Cơ quan nào quy định khung chính sách đối với người có tài năng trong hoạt động công vụ?",
    choices: ["     Chính phủ", " Nhà nước", "     Bộ Nội Vụ", "    Quốc Hội"],
    correct: "     Chính phủ",
  },
  {
    question:
      " 75: Theo Luật Cán bộ, công chức năm 2008, đâu không phải điều kiện đăng ký dự tuyển công chức?",
    choices: [
      "     Có một quốc tịch là quốc tịch Việt Nam;",
      "    Đủ 18 tuổi trở lên;",
      "     Đủ 21 tuổi trở lên;",
      "    Có đơn dự tuyển; có lý lịch rõ ràng.",
    ],
    correct: "     Đủ 21 tuổi trở lên;",
  },
  {
    question:
      " 76: Theo Luật cán bộ, công chức 2008, có bao nhiêu trường hợp công chức lãnh đạo, quản lý có thể từ chức, miễn nhiệm?",
    choices: [
      "     04 trường hợp",
      "    05 trường hợp",
      "     06 trường hợp",
      "    07 trường hợp",
    ],
    correct: "     04 trường hợp",
  },
  {
    question:
      " 77: Về thẩm quyền quyết định biên chế cán bộ, công chức, căn cứ Luật cán bộ, công chức 2008:",
    choices: [
      "   Uỷ ban Thường vụ Quốc hội quyết định biên chế công chức của Văn phòng Quốc hội, Kiểm toán nhà nước, Toà án nhân dân, Viện kiểm sát nhân dân.",
      "   Bộ nội vụ là cơ quan quyết định biên chế và quản lý cán bộ, công chức trong cơ quan hành chính nhà nước ở trung ương; quy định mức biên chế hành chính sự nghiệp thuộc uỷ ban nhân dân.",
      "   Chính phủ quyết định biên chế và quản lý cán bộ, công chức làm trong cơ quan Toà án và Viện kiểm sát.",
      "   Bộ Nội vụ quyết định biên chế và quản lý cán bộ công chức văn phòng Quốc hội.",
    ],
    correct:
      "   Uỷ ban Thường vụ Quốc hội quyết định biên chế công chức của Văn phòng Quốc hội, Kiểm toán nhà nước, Toà án nhân dân, Viện kiểm sát nhân dân.",
  },
  {
    question:
      " 78: Cán bộ, công chức có công trạng thì được khen thưởng dưới hình thức nào sau đây?",
    choices: [
      "   Ưu tiên xem xét khi bổ nhiệm chức vụ cao hơn nếu cơ quan, tổ chức, đơn vị có nhu cầu.",
      "   Nâng lương trước thời hạn.",
      "   Nâng hai bậc lương so với mức lương hiện tại",
      "   Câu a và b đúng.",
    ],
    correct: "   Câu a và b đúng.",
  },
  {
    question:
      " 79: Theo Luật cán bộ, công chức 2008, hình thức kỷ luật 'Giáng chức' chỉ áp dụng với đối tượng nào:",
    choices: [
      "     Cán bộ giữ chức vụ lãnh đạo, quản lý.",
      "    Viên chức giữ chức vụ lãnh đạo, quản lý.",
      "     Công chức giữ chức vụ lãnh đạo, quản lý.",
      "    Cán bộ không giữ chức vụ lãnh đạo, quản lý.",
    ],
    correct: "     Công chức giữ chức vụ lãnh đạo, quản lý.",
  },
  {
    question:
      " 80: Cán bộ, công chức sau khi nghỉ việc hoặc nghỉ hưu mới phát hiện có hành vi vi phạm trong thời gian công tác thì tùy theo tính chất, mức độ vi phạm phải chịu một trong các hình thức kỷ luật nào sau đây?",
    choices: [
      "   Khiển trách",
      "   Cảnh cáo",
      "   Xóa tư cách chức vụ đã đảm nhiệm gắn với hệ quả pháp lý tương ứng",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 81: Theo Luật cán bộ, công chức 2008 và sửa đổi, bổ sung Luật CBCC 2019, đâu là quyền của cán bộ, công chức được bảo đảm các điều kiện thi hành công vụ?",
    choices: [
      "     Được bảo đảm trang thiết bị và các điều kiện làm việc khác theo quy định của pháp luật.",
      "    Được pháp luật bảo vệ khi thi hành công vụ.",
      "     Được đào tạo, bồi dưỡng nâng cao trình độ chính trị, chuyên môn, nghiệp vụ.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct: "    Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 82: Theo Luật Cán bộ, công chức năm 2008, đâu là nghĩa vụ của cán bộ, công chức đối với Đảng, Nhà nước và Nhân dân?",
    choices: [
      "     Thực hiện đúng, đầy đủ và chịu trách nhiệm về kết quả thực hiện nhiệm vụ, quyền hạn được giao.",
      "    Bảo vệ, quản lý và sử dụng hiệu quả, tiết kiệm tài sản nhà nước được giao.",
      "     Cán bộ, công chức không được hách dịch, cửa quyền, gây khó khăn, phiền hà cho Nhân dân khi thi hành công vụ.",
      "    Chấp hành nghiêm chỉnh đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước.",
    ],
    correct:
      "    Chấp hành nghiêm chỉnh đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước.",
  },
  {
    question:
      " 83: Theo Luật Cán bộ, công chức năm 2008, căn cứ vào ngạch được bổ nhiệm, những người được bổ nhiệm vào ngạch cán sự hoặc tương đương thuộc công chức loại gì?",
    choices: ["     Loại A.", "    Loại B.", "     Loại C.", "    Loại D."],
    correct: "    Loại D.",
  },
  {
    question:
      " 84: Theo Luật Cán bộ, công chức năm 2008, có bao nhiêu nguyên tắc tuyển dụng công chức? ĐIỀU 38",
    choices: ["     04", "    05", "     06", "    07"],
    correct: "04",
  },
  {
    question: " 85: Theo Luật cán bộ, công chức năm 2008, 'cán bộ' là?",
    choices: [
      "     Công dân Việt Nam, được bầu cử, phê chuẩn, bổ nhiệm giữ chức vụ, chức danh theo nhiệm kỳ trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, ở tỉnh, thành phố trực thuộc trung ương (sau đây gọi chung là cấp tỉnh), ở huyện, quận, thị xã, thành phố thuộc tỉnh (sau đây gọi chung là cấp huyện), trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "    Người Việt Nam, được bầu cử, phê chuẩn, bổ nhiệm giữ chức vụ, chức danh theo nhiệm kỳ trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, ở tinh, thành phố trực thuộc trung ương (sau đây gọi chung là cấp tỉnh), ở huyện, quận, thị xã, thành phố thuộc tỉnh (sau đây gọi chung là cấp huyện), trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "     Công dân trên toàn thế giới, được bầu cử, phê chuẩn, bổ nhiệm giữ chức vụ, chức danh theo nhiệm kỳ trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, ở tinh, thành phố trực thuộc trung ương (sau đây gọi chung là cấp tỉnh), ở huyện, quận, thị xã, thành phố thuộc tỉnh (sau đây gọi chung là cấp huyện), trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct:
      "     Công dân Việt Nam, được bầu cử, phê chuẩn, bổ nhiệm giữ chức vụ, chức danh theo nhiệm kỳ trong cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội ở trung ương, ở tỉnh, thành phố trực thuộc trung ương (sau đây gọi chung là cấp tỉnh), ở huyện, quận, thị xã, thành phố thuộc tỉnh (sau đây gọi chung là cấp huyện), trong biên chế và hưởng lương từ ngân sách nhà nước.",
  },
  {
    question:
      " 86: Theo Luật Cán bộ, công chức năm 2008, quy định cán bộ, công chức là người đứng đầu có bao nhiêu nghĩa vụ? ĐIỀU 10",
    choices: [
      "   05 nghĩa vụ",
      "   15 nghĩa vụ",
      "   16 nghĩa vụ",
      "   06 nghĩa vụ",
    ],
    correct: "   06 nghĩa vụ",
  },
  {
    question:
      " 87: Căn cứ vào yêu cầu nhiệm vụ, cơ quan, tổ chức, đơn vị thực hiện việc mua sắm trang thiết bị cần làm việc nguyên tắc nào sau đây:",
    choices: [
      "   Theo tiêu chuẩn, định mức, chế độ quản lý tài sản nhà nước.",
      "   Theo mức độ, yêu cầu cụ thể của nhiệm vụ.",
      "   Theo ngân sách của cơ quan, tổ chức, đơn vị.",
      "   Theo yêu cầu của người thực hiện nhiệm vụ.",
    ],
    correct: "   Theo tiêu chuẩn, định mức, chế độ quản lý tài sản nhà nước.",
  },
  {
    question:
      " 88: Theo Luật cán bộ, công chức 2008; công chức có thể được luân chuyển trong cơ quan nào?",
    choices: [
      "     Đơn vị sự nghiệp công lập.",
      "    Doanh nghiệp vốn chủ sở hữu nhà nước.",
      "   Hệ thống các cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức Chính trị- xã hội.",
      "    Vùng có điều kiện kinh tế-xã hội đặc biệt khó khăn.",
    ],
    correct:
      "   Hệ thống các cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức Chính trị- xã hội.",
  },
  {
    question: " 89: Theo Luật cán bộ, công chức 2008, đâu là công chức cấp xã?",
    choices: [
      "     Bí thư Đảng ủy.",
      "    Chủ Tịch Ủy ban Mặt trận Tổ quốc Việt Nam.",
      "     Tư pháp – Hộ tịch.",
      "    Chủ tịch Hội Liên hiệp Phụ nữ Việt Nam.",
    ],
    correct: "     Tư pháp – Hộ tịch.",
  },
  {
    question:
      " 90: Câu nào sau đây đúng với nội dung quản lý cán bộ, công chức theo quy định của Luật Cán bộ, công chức 2008?",
    choices: [
      "   Tạo điều kiện cho công chức học tập, bồi dưỡng trình độ;",
      "   Ký hợp đồng làm việc;",
      "   Quy định ngạch, chức danh, mã số công chức; mô tả, quy định vị trí việc làm và cơ cấu công chức để xác định số lượng biên chế.",
      "   Tất cả câu trên đều đúng. ",
    ],
    correct:
      "   Quy định ngạch, chức danh, mã số công chức; mô tả, quy định vị trí việc làm và cơ cấu công chức để xác định số lượng biên chế.",
  },
  {
    question: " 91: Nhà ở công vụ là:",
    choices: [
      "   Do Nhà nước đầu tư xây dựng;",
      "   Do cơ quan có thẩm quyền quản lý cán bộ, công chức đầu tư xây dựng;",
      "   Để cán bộ, công chức được điều động, luân chuyển, biệt phái thuê trong thời gian đảm nhiệm công tác;",
      "   Câu a và c đúng.",
    ],
    correct: "   Câu a và c đúng.",
  },
  {
    question:
      " 92: Theo luật Cán bộ, công chức 2008; đâu không phải là nguyên tắc quản lý cán bộ, công chức?",
    choices: [
      "     Thực hiện nguyên tắc tập trung dân chủ, chế độ trách nhiệm cá nhân và phân công, phân cấp rõ ràng.",
      "    Việc sử dụng, đánh giá, phân loại cán bộ, công chức phải dựa trên phẩm chất chính trị, đạo đức và năng lực thi hành công vụ.",
      "     Thực hiện bình đẳng giới.",
      "    Công khai, minh bạch, đúng thẩm quyền và có sự kiểm tra, giám sát.",
    ],
    correct: "     Thực hiện bình đẳng giới.",
  },
  {
    question:
      " 93: Theo Luật cán bộ, công chức 2008 và sửa đổi, bổ sung Luật CBCC 2019, đâu không phải là quyền của cán bộ, công chức được bảo đảm các điều kiện thi hành công vụ?",
    choices: [
      "     Được giao quyền tương xứng với nhiệm vụ.",
      "    Được bảo đảm trang thiết bị và các điều kiện làm việc khác theo quy định của pháp luật.",
      "     Được cung cấp thông tin liên quan đến nhiệm vụ, quyền hạn được giao.",
      "    Được hưởng tiền làm thêm giờ, tiền làm đêm, công tác phí và các chế độ khác theo quy định của pháp luật.",
    ],
    correct:
      "    Được hưởng tiền làm thêm giờ, tiền làm đêm, công tác phí và các chế độ khác theo quy định của pháp luật.",
  },
  {
    question:
      " 94: Theo Luật cán bộ, công chức năm 2008, 'cán bộ xã, phường, thị trấn' là?",
    choices: [
      "   Công dân Việt Nam, được bầu cử giữ chức vụ theo nhiệm kỳ trong Thường trực Hội đồng nhân dân, uỷ ban nhân dân, Bí thư, Phó bí thư Đảng uỷ, người đứng đầu tổ chức chính trị- xã hội.",
      "   Người Việt Nam, được bầu cử giữ chức vụ theo nhiệm kỳ trong Thường trực Hội đồng nhân dân, uỷ ban nhân dân, Bí thư, Phó bí thư Đảng uỷ, người đứng đầu tổ chức chính trị- xã hội.",
      "   Người được bầu cử giữ chức vụ theo nhiệm kỳ trong Thường trực Hội đồng nhân dân, uỷ ban nhân dân, Bí thư, Phó bí thư Đảng uỷ, người đứng đầu tổ chức chính trị- xã hội.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct:
      "   Công dân Việt Nam, được bầu cử giữ chức vụ theo nhiệm kỳ trong Thường trực Hội đồng nhân dân, uỷ ban nhân dân, Bí thư, Phó bí thư Đảng uỷ, người đứng đầu tổ chức chính trị- xã hội.",
  },
  {
    question:
      " 95: Theo Luật Cán bộ, công chức năm 2008, cán bộ, công chức có bao nhiêu nghĩa vụ trong thi hành công vụ?",
    choices: ["   04", "    05", "    06", "   07"],
    correct: "06",
  },
  {
    question:
      " 96: Theo Luật cán bộ, công chức 2008, việc cán bộ, công chức không được làm liên quan đến đạo đức công vụ là gì?",
    choices: [
      "     Sử dụng tài sản của Nhà nước và của Nhân dân trái pháp luật.",
      "    Cán bộ, công chức không được tiết lộ thông tin liên quan đến bí mật nhà nước dưới mọi hình thức.",
      "     Cán bộ, công chức làm việc ở ngành, nghề có liên quan đến bí mật nhà nước thì trong thời hạn ít nhất là 05 năm, kể từ khi có quyết định nghỉ hưu, thôi việc.",
      "    Cán bộ, công chức không được hách dịch, cửa quyền, gây khó khăn, phiền hà cho nhân dân khi thi hành công vụ.",
    ],
    correct:
      "     Sử dụng tài sản của Nhà nước và của Nhân dân trái pháp luật.",
  },
  {
    question:
      " 97: Theo Luật cán bộ, công chức 2008, không thực hiện biệt phái đối với công chức nữ nuôi con dưới bao nhiêu tuổi?",
    choices: [
      "     12 tháng tuổi",
      "    18 tháng tuổi",
      "     24 tháng tuổi",
      "    36 tháng tuổi ",
    ],
    correct: "    36 tháng tuổi ",
  },
  {
    question: " 98: Theo luật Cán bộ, Công chức 2008, 'cách chức' là gì?",
    choices: [
      "     Việc cán bộ, công chức lãnh đạo, quản lý không được tiếp tục giữ chức vụ lãnh đạo, quản lý khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      "    Việc cán bộ, công chức được cơ quan có thẩm quyền quyết định chuyển từ cơ quan, tổ chức, đơn vị này đến làm việc ở cơ quan, tổ chức, đơn vị khác.",
      "     Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
      "    Việc cán bộ, công chức được thôi giữ chức vụ, chức danh khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
    ],
    correct:
      "     Việc cán bộ, công chức lãnh đạo, quản lý không được tiếp tục giữ chức vụ lãnh đạo, quản lý khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
  },
  {
    question:
      " 99: Theo Luật Cán bộ, công chức năm 2008, đâu không phải tiêu chuẩn, điều kiện để công chức dự thi nâng ngạch?",
    choices: [
      "     Công chức đăng ký dự thi nâng ngạch phải có phẩm chất chính trị.",
      "    Công chức đăng ký dự thi nâng ngạch phải có đạo đức.",
      "     Công chức đăng ký dự thi nâng ngạch phải có năng lực.",
      "    Công chức đăng ký dự thi nâng ngạch phải có bằng khen.",
    ],
    correct: "    Công chức đăng ký dự thi nâng ngạch phải có bằng khen.",
  },
  {
    question:
      " 100: Theo Luật cán bộ, công chức 2008, đâu không phải công chức cấp xã?",
    choices: [
      "     Chủ tịch Ủy ban Mặt trận Tổ quốc Việt Nam.",
      "    Tài chính – kế toán.",
      "     Trưởng công an.",
      "    Văn hóa- xã hội.",
    ],
    correct: "     Chủ tịch Ủy ban Mặt trận Tổ quốc Việt Nam.",
  },
  {
    question:
      " 101: Theo Luật cán bộ, công chức 2008, cơ quan nào có thẩm quyền quyết định biên chế công chức của bộ, cơ quan ngang bộ, cơ quan thuộc Chính phủ, cấp tỉnh?",
    choices: [
      "     Quốc hội.",
      "    Chính phủ.",
      "     Ủy ban Thường vụ Quốc hội.",
      "    Chủ tịch nước.",
    ],
    correct: "    Chính phủ.",
  },
  {
    question:
      " 102: Theo Luật sửa đổi, bổ sung Luật CBCC 2019, khái niệm nào về công sở sau đây là đúng và đầy đủ nhất:",
    choices: [
      "   Công sở là trụ sở làm việc của cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội, đơn vị sự nghiệp công lập, có tên gọi riêng, có địa chỉ cụ thể, bao gồm công trình xây dựng, các tài sản khác thuộc khuôn viên trụ sở làm việc.",
      "   Công sở là trụ sở làm việc của cơ quan của Nhà nước, tổ chức chính trị - xã hội, có tên gọi riêng, có địa chỉ cụ thể, bao gồm công trình xây dựng, các tài sản khác thuộc khuôn viên trụ sở làm việc.",
      "   Công sở là trụ sở làm việc của cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội, có tên gọi riêng, có địa chỉ cụ thể, bao gồm công trình xây dựng, các tài sản khác thuộc khuôn viên trụ sở làm việc.",
      "   Công sở là đơn vị sự nghiệp công lập, có tên gọi riêng, có địa chỉ cụ thể, bao gồm công trình xây dựng, các tài sản khác thuộc khuôn viên trụ sở làm việc.",
    ],
    correct:
      "   Công sở là trụ sở làm việc của cơ quan của Đảng Cộng sản Việt Nam, Nhà nước, tổ chức chính trị - xã hội, đơn vị sự nghiệp công lập, có tên gọi riêng, có địa chỉ cụ thể, bao gồm công trình xây dựng, các tài sản khác thuộc khuôn viên trụ sở làm việc.",
  },
  {
    question:
      " 103: Theo luật Cán bộ, công chức 2008, có bao nhiêu nguyên tắc quản lý cán bộ, công chức",
    choices: [" 05", " 06", " 07", " 08"],
    correct: "05",
  },
  {
    question:
      " 104: Theo Luật cán bộ, công chức năm 2008, khái niệm nào về 'cơ quan quản lý cán bộ công chức' là đầy đủ nhất?",
    choices: [
      "   Cơ quan quản lý cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền tuyển dụng, bổ nhiệm, nâng ngạch, nâng lương, cho thôi việc, nghỉ hưu, giải quyết chế độ, chính sách và khen thưởng, kỷ luật đối với cán bộ, công chức.",
      "   Cơ quan quản lý cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền cho thôi việc, nghỉ hưu, giải quyết chế độ, chính sách và khen thưởng, kỷ luật đối với cán bộ, công chức.",
      "   Cơ quan quản lý cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền tuyển dụng, bổ nhiệm, nâng ngạch, nâng lương, cho thôi việc, nghỉ hưu, kỷ luật đối với cán bộ, công chức.",
      "   Tất cả câu trên đều sai.",
    ],
    correct:
      "   Cơ quan quản lý cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền tuyển dụng, bổ nhiệm, nâng ngạch, nâng lương, cho thôi việc, nghỉ hưu, giải quyết chế độ, chính sách và khen thưởng, kỷ luật đối với cán bộ, công chức.",
  },
  {
    question: " 105: Hoạt động công vụ của cán bộ, công chức là gì?",
    choices: [
      "   Là việc thực hiện nhiệm vụ.",
      "   Là quyền hạn của cán bộ, công chức theo quy định của luật CBCC và các quy định khác có liên quan.",
      "   Tất cả câu trên đều đúng.",
      "   Không có đáp án đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 106: Theo Luật cán bộ, công chức năm 2008 và sửa đổi, bổ sung luật CBCC 2019, 'luân chuyển' là gì?",
    choices: [
      "     Việc công chức của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
      "    Việc cán bộ, công chức lãnh đạo, quản lý được cử hoặc bổ nhiệm giữ một chức danh lãnh đạo, quản lý khác trong một thời hạn nhất định để tiếp tục được đào tạo, bồi dưỡng và rèn luyện theo yêu cầu nhiệm vụ.",
      "    Việc công chức của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu nhiệm vụ.",
      "    Việc tổ chức lãnh đạo, quản lý của cơ quan, tổ chức, đơn vị này được cử đến làm việc tại cơ quan, tổ chức, đơn vị khác theo yêu cầu, nhiệm vụ.",
    ],
    correct:
      "    Việc cán bộ, công chức lãnh đạo, quản lý được cử hoặc bổ nhiệm giữ một chức danh lãnh đạo, quản lý khác trong một thời hạn nhất định để tiếp tục được đào tạo, bồi dưỡng và rèn luyện theo yêu cầu nhiệm vụ.",
  },
  {
    question:
      " 107: Theo Luật Cán bộ, công chức 2008, việc tuân thủ Hiến pháp và pháp luật là một trong các:",
    choices: [
      "     Nguyên tắc quản lý cán bộ, công chức.",
      "    Nguyên tắc tuyển dụng công chức.",
      "     Nguyên tắc trong thi hành công vụ.",
      "    Nghĩa vụ của cán bộ, công chức trong thi hành công vụ.",
    ],
    correct: "     Nguyên tắc trong thi hành công vụ.",
  },
  {
    question:
      " 108: Theo Luật Cán bộ, công chức năm 2008, đâu là công chức loại B theo quy định của Luật Cán bộ, công chức 2008 sửa đổi 2019?",
    choices: [
      "     Chuyên viên chính.",
      "    Cán sự.",
      "     Chuyên viên.",
      "    Chuyên viên cao cấp.",
    ],
    correct: "     Chuyên viên chính.",
  },
  {
    question:
      " 109: Theo Luật cán bộ, công chức 2008, thời hạn biệt phái công chức tối đa là bao nhiêu năm (trừ một số ngành, lĩnh vực do chính phủ quy định)?",
    choices: [
      "     Không quá 01 năm.",
      "    Không quá 02 năm.",
      "    Không quá 03 năm.",
      "    Không quá 05 năm.",
    ],
    correct: "    Không quá 03 năm.",
  },
  {
    question:
      " 110: Theo Luật Cán bộ, công chức năm 2008, đâu không phải trường hợp được bổ nhiệm vào ngạch công chức?",
    choices: [
      "   Người được tuyển dụng đã hoàn thành chế độ tập sự.",
      "   Công chức trúng tuyển kỳ thi nâng ngạch.",
      "   Công chức chuyển sang ngạch tương đương.",
      "   Viên chức đã hoàn thành chế độ tập sự.",
    ],
    correct: "   Viên chức đã hoàn thành chế độ tập sự.",
  },
  {
    question:
      " 111: Theo Luật Cán bộ, công chức năm 2008, có bao nhiêu ngạch công chức?",
    choices: [" 1", " 2", " 3", " 4"],
    correct: "4",
  },
  {
    question:
      " 112: Theo Luật Cán bộ, Công chức 2008, cán bộ, công chức làm việc ở ngành, nghề có liên quan đến bí mật nhà nước thì trong mấy năm không được làm công việc liên quan đến ngành, nghề trước đây mình đảm nhiệm cho tổ chức, cá nhân trong nước, tổ chức, cá nhân hoặc liên doanh nước ngoài?",
    choices: ["     03 năm.", "    04 năm.", "     05 năm.", "    06 năm."],
    correct: "     05 năm.",
  },
  {
    question:
      " 113: Theo Luật Cán bộ, công chức năm 2008, cán bộ, công chức có bao nhiêu nghĩa vụ đối với Đảng, Nhà nước và nhân dân?",
    choices: ["    03", "    04", "    05", "    06 "],
    correct: "04",
  },
  {
    question:
      " 114: Thời hiệu xử lý kỷ luật 02 năm được quy định đối với hành vi vi phạm nào dưới đây?",
    choices: [
      "   Vi phạm quy định về công tác bảo vệ chính trị nội bộ.",
      "   Có xâm hại đến lợi ích quốc gia.",
      "   Vi phạm quy định về đạo đức, văn hoá giao tiếp của cán bộ, công chức.",
      "   Sử dụng văn bằng, chứng chỉ giả hoặc không hợp pháp.",
    ],
    correct:
      "   Vi phạm quy định về đạo đức, văn hoá giao tiếp của cán bộ, công chức.",
  },
  {
    question:
      " 115: Thời hạn tạm đình chỉ công tác thông thường có thể kéo dài tối đa bao lâu?",
    choices: ["   07 ngày.", "   09 ngày.", "   12 ngày.", "   15 ngày."],
    correct: "   15 ngày.",
  },
  {
    question:
      " 116: Theo Luật sửa đổi bổ sung Luật CBCC 2019, trường hợp kỷ luật bằng hình thức nào dưới đây thì không thực hiện việc nâng ngạch, đào tạo, bổ nhiệm vào chức vụ cao hơn trong 24 tháng kể từ ngày quyết định kỷ luật có hiệu lực?",
    choices: [
      "   Giáng chức",
      "   Cảnh cáo",
      "   Hạ bậc lương",
      "   Khiển trách",
    ],
    correct: "   Giáng chức",
  },
  {
    question:
      " 117: Mọi hành vi vi phạm trong thời gian công tác của cán bộ, công chức đã nghỉ việc, nghỉ hưu bị xử lý theo:",
    choices: [
      "   Xử lý kỷ luật, căn cứ vào tính chất, mức độ nghiêm trọng.",
      "   Xử lý hình sự, căn cứ vào tính chất, mức độ nghiêm trọng.",
      "   Xử lý hành chính, căn cứ vào tính chất, mức độ nghiêm trọng.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 118: Hình thức giáng chức, cách chức áp dụng với đối tượng nào sau đây?",
    choices: [
      "   Công chức giữ chức vụ lãnh đạo, quản lý.",
      "   Công chức không giữ chức vụ lãnh đạo, quản lý.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Công chức giữ chức vụ lãnh đạo, quản lý.",
  },
  {
    question:
      " 119: Theo Luật cán bộ, công chức 2008, thời hạn bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý là bao lâu?",
    choices: ["     03 năm.", "    04 năm.", "     05 năm.", "    06 năm."],
    correct: "     05 năm.",
  },
  {
    question:
      " 120: Theo Luật cán bộ, công chức 2008, không giải quyết thôi việc đối với trường hợp nào?",
    choices: [
      "     Do sắp xếp tổ chức.",
      "    Theo nguyện vọng và được cấp có thẩm quyền đồng ý.",
      "     Công chức không hoàn thành nhiệm vụ 02 năm liên tiếp.",
      "    Công chức trong thời gian xem xét kỷ luật.",
    ],
    correct: "    Công chức trong thời gian xem xét kỷ luật.",
  },
  {
    question:
      " 121: Theo Luật cán bộ, công chức 2008, nội dung ban hành và tổ chức thực hiện văn bản quy phạm pháp luật về cán bộ, công chức nằm trong:",
    choices: [
      "     Nguyên tắc thi hành công vụ.",
      "    Nguyên tắc tuyển dụng công chức.",
      "     Quản lý cán bộ, công chức.",
      "    Nghĩa vụ của cán bộ, công chức đối với Đảng, Nhà nước và Nhân dân.",
    ],
    correct: "     Quản lý cán bộ, công chức.",
  },
  {
    question:
      " 122: Khi hết thời hạn điều động, luân chuyển, biệt phái của cán bộ, công chức, nhà ở công vụ phải:",
    choices: [
      "   Được trả lại cho cơ quan, tổ chức, đơn vị quản lý nhà ở công vụ.",
      "   Được tiếp tục thuê dưới danh nghĩa của cán bộ, công chức.",
      "   Được bàn giao hoàn toàn cho cán bộ, công chức.",
      "   Được chuyển nhượng cho cán bộ, công chức khác.",
    ],
    correct:
      "   Được trả lại cho cơ quan, tổ chức, đơn vị quản lý nhà ở công vụ.",
  },
  {
    question:
      " 123: Theo Luật cán bộ, công chức 2008, có bao nhiêu trường hợp mà trong đó cán bộ, công chức được miễn trách nhiệm?",
    choices: ["   02", "   03", "   04", "   01"],
    correct: "   02",
  },
  {
    question:
      " 124: Theo Luật Cán bộ, công chức năm 2008, cơ quan nào quy định cụ thể việc thi tuyển, xét tuyển công chức?",
    choices: [
      "     Quốc hội.",
      "    Ủy ban thường vụ quốc hội.",
      "     Chính phủ.",
      "    Bộ Nội vụ.",
    ],
    correct: "     Chính phủ.",
  },
  {
    question:
      " 125: Theo Luật Cán bộ, công chức 2008, đâu là nguyên tắc quản lý cán bộ, công chức.",
    choices: [
      "     Bảo đảm sự lãnh đạo của Đảng Cộng sản Việt Nam, sự quản lý của Nhà nước.",
      "    Hạch toán kinh tế trong dịch vụ công.",
      "     Tuân thủ pháp luật.",
      "    Tôn trọng mọi ý kiến.",
    ],
    correct: "    Hạch toán kinh tế trong dịch vụ công.",
  },
  {
    question:
      " 126: Theo Luật cán bộ, công chức năm 2008, 'cơ quan sử dụng cán bộ, công chức' là?",
    choices: [
      "     Cơ quan sử dụng cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền quản lý, phân công, bố trí, kiểm tra việc thực hiện nhiệm vụ, quyền hạn của cán bộ, công chức.",
      "    Cơ quan sử dụng cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền quản lý, bố trí, kiểm tra việc thực hiện nhiệm vụ, quyền hạn của cán bộ, công chức.",
      "     Cơ quan sử dụng cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền kiểm tra việc thực hiện nhiệm vụ, quyền hạn của cán bộ, công chức.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct:
      "     Cơ quan sử dụng cán bộ, công chức là cơ quan, tổ chức, đơn vị được giao thẩm quyền quản lý, phân công, bố trí, kiểm tra việc thực hiện nhiệm vụ, quyền hạn của cán bộ, công chức.",
  },
  {
    question:
      " 127: Theo Luật Cán bộ, công chức năm 2008, đâu là nghĩa vụ của cán bộ, công chức trong thi hành công vụ?",
    choices: [
      "     Bảo vệ, quản lý và sử dụng hiệu quả, tiết kiệm tài sản nhà nước được giao.",
      "    Chấp hành nghiêm chỉnh đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước.",
      "     Liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến và chịu sự giám sát của nhân dân.",
      "    Trung thành với Đảng Cộng sản Việt Nam, Nhà nước CHXHCN Việt Nam; bảo vệ danh dự Tổ quốc và lợi ích quốc gia.",
    ],
    correct:
      "     Liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến và chịu sự giám sát của nhân dân.",
  },
  {
    question:
      " 128: Theo Luật Cán bộ, công chức năm 2008, căn cứ vào ngạch được bổ nhiệm, những người được bổ nhiệm vào ngạch chuyên viên chính hoặc tương đương thuộc công chức loại gì?",
    choices: ["     Loại A.", "    Loại B.", "     Loại C.", "    Loại D."],
    correct: "    Loại B.",
  },
  {
    question:
      " 129: Theo Luật Cán bộ, công chức năm 2008, việc thi nâng ngạch không đảm bảo nguyên tắc gì?",
    choices: [
      "     Cạnh tranh, công khai.",
      "    Khách quan, minh bạch.",
      "     Bí mật.",
      "    Đúng pháp luật.",
    ],
    correct: "     Bí mật.",
  },
  {
    question:
      " 130: Theo Luật cán bộ, công chức 2008, đâu không phải trường hợp công chức giữ chức vụ lãnh đạo, quản lý có thể từ chức?",
    choices: [
      "     Không đủ sức khỏe.",
      "    Không đủ năng lực, uy tín.",
      "     Theo yêu cầu nhiệm vụ.",
      "    Vì điều kiện gia đình.",
    ],
    correct: "    Vì điều kiện gia đình.",
  },
  {
    question: " 131: Theo Luật cán bộ, công chức 2008 đâu là công chức cấp xã?",
    choices: [
      "     Trưởng công an.",
      "    Chủ tịch Hội Cựu chiến binh Việt Nam.",
      "     Chủ tịch Uỷ ban nhân dân.",
      "    Chủ tịch Hội đồng nhân dân.",
    ],
    correct: "     Trưởng công an.",
  },
  {
    question: " 132: Về thẩm quyền quản lý hồ sơ cán bộ, công chức:",
    choices: [
      "   Cơ quan có thẩm quyền của Đảng Cộng sản Việt Nam hướng dẫn việc lập, quản lý hồ sơ cán bộ, công chức thuộc quyền quản lý.",
      "   Bộ Nội vụ hướng dẫn việc lập, quản lý hồ sơ cán bộ, công chức, trừ trường hợp thuộc quyền quản lý của cơ quan có thẩm quyền của Đảng Cộng sản Việt Nam.",
      "   Bộ Nội vụ hướng dẫn việc lập, quản lý hồ sơ cán bộ, công chức của tất cả các cơ quan, tổ chức, đơn vị.",
      "   Câu a và b đúng.",
    ],
    correct: "   Câu a và b đúng.",
  },
  {
    question:
      " 133: Trong thời gian bị tạm đình chỉ công tác hoặc bị tạm giữ, tạm giam để phục vụ cho công tác điều tra, truy tố, xét xử, cán bộ, công chức:",
    hoices: [
      "   Được hưởng lương theo quy định của Chính phủ.",
      "   Không được hưởng lương theo quy định của Chính phủ.",
      "   Được hưởng 30% lương theo quy định của Chính phủ.",
      "   Được hưởng 50% lương theo quy định của Chính phủ.",
    ],
    correct: "   Được hưởng lương theo quy định của Chính phủ.",
  },
  {
    question:
      " 134: Theo Luật Cán bộ, công chức năm 2008, đâu là công chức loại C theo quy định của Luật Cán bộ, công chức 2008 sửa đổi 2019?",
    choices: [
      "     Chuyên viên chính.",
      "    Cán sự.",
      "     Chuyên viên.",
      "    Chuyên viên cao cấp.",
    ],
    correct: "     Chuyên viên.",
  },
  {
    question:
      " 135: Theo Luật Cán bộ, công chức năm 2008, đâu không phải cơ quan thực hiện tuyển dụng công chức?",
    choices: [
      "   Tòa án NDTC, Viện kiểm sát NDTC, Kiểm toán Nhà nước thực hiện tuyển dụng và phân cấp tuyển dụng công chức trong cơ quan, tổ chức, đơn vị thuộc quyền quản lý.",
      "   Cơ quan của Đảng Cộng sản Việt Nam, tổ chức chính trị - xã hội tuyển dụng và phân cấp tuyển dụng công chức trong cơ quan, tổ chức, đơn vị thuộc quyền quản lý.",
      "   UBND cấp tỉnh tuyển dụng và phân cấp tuyển dụng công chức trong cơ quan, tổ chức, đơn vị thuộc quyền quản lý.",
      "   Hội đồng nhân dân cấp tỉnh tuyển dụng và phân cấp tuyển dụng công chức trong cơ quan, tổ chức, đơn vị thuộc quyền quản lý.",
    ],
    correct:
      "   Hội đồng nhân dân cấp tỉnh tuyển dụng và phân cấp tuyển dụng công chức trong cơ quan, tổ chức, đơn vị thuộc quyền quản lý.",
  },
  {
    question:
      " 136: Theo Luật cán bộ, công chức 2008, quyền lợi của công chức tham gia đào tạo bồi dưỡng là gì?",
    choices: [
      "     Hưởng nguyên lương và phụ cấp.",
      "    Hưởng 50% lương và phụ cấp.",
      "     Hưởng 80% lương và phụ cấp.",
      "    Hưởng 75% lương và phụ cấp.",
    ],
    correct: "     Hưởng nguyên lương và phụ cấp.",
  },
  {
    question:
      " 137: Theo Luật cán bộ, công chức 2008, đâu không phải công chức cấp xã?",
    choices: [
      "     Văn hóa – xã hội.",
      "    Địa chính – xây dựng – môi trường.",
      "     Chủ tịch Uỷ ban nhân dân.",
      "    Chỉ huy trưởng quân sự.",
    ],
    correct: "     Chủ tịch Uỷ ban nhân dân.",
  },
  {
    question:
      " 138: Theo luật Cán bộ, công chức 2008, đâu là nguyên tắc trong thi hành công vụ?",
    choices: [
      "     Hoạt động công vụ phải có lợi nhuận.",
      "    Hạch toán kinh tế trong dịch vụ công.",
      "     Tuân thủ Hiến pháp và pháp luật.",
      "    Tôn trọng mọi ý kiến.",
    ],
    correct: "     Tuân thủ Hiến pháp và pháp luật.",
  },
  {
    question:
      " 139: Theo Luật Cán bộ, Công chức 2008, đâu là nguyên tắc trong thi hành công vụ:",
    choices: [
      "     Tuân thủ Hiến pháp và pháp luật.",
      "    Kết hợp giữa tiêu chuẩn chức danh, vị trí việc làm và chỉ tiêu biên chế.",
      "     Thực hiện nguyên tắc tập trung dân chủ, chế độ trách nhiệm cá nhân và phân công, phân cấp rõ ràng.",
      "    Việc sử dụng, đánh giá, phân loại cán bộ, công chức phải dựa trên phẩm chất chính trị, đạo đức và năng lực thi hành công vụ.",
    ],
    correct: "     Tuân thủ Hiến pháp và pháp luật.",
  },
  {
    question:
      " 140: Theo Luật Cán bộ, công chức 2008, đâu không phải là nguyên tắc trong thi hành công vụ?",
    choices: [
      "     Hoạt động công vụ phải có lợi nhuận.",
      "    Công khai, minh bạch, đúng thẩm quyền và có sự kiểm tra, giám sát.",
      "     Bảo đảm tính hệ thống, thống nhất, liên tục, thông suốt và hiệu quả.",
      "    Bảo đảm thứ bậc hành chính và sự phối hợp chặt chẽ.",
    ],
    correct: "     Hoạt động công vụ phải có lợi nhuận.",
  },
  {
    question: " 141: Theo Luật Cán bộ, công chức 2008, 'từ chức' là gì?",
    choices: [
      "     Việc cán bộ không được tiếp tục giữ chức vụ, chức danh khi chưa hết nhiệm kỳ.",
      "    Việc cán bộ, công chức lãnh đạo, quản lý đề nghị được thôi giữ chức vụ khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
      "    Việc cán bộ, công chức được quyết định giữ một chức vụ lãnh đạo, quản lý hoặc một ngạch theo quy định của pháp luật.",
      "    Việc công chức giữ chức vụ lãnh đạo, quản lý bị hạ xuống chức vụ thấp hơn.",
    ],
    correct:
      "    Việc cán bộ, công chức lãnh đạo, quản lý đề nghị được thôi giữ chức vụ khi chưa hết nhiệm kỳ hoặc chưa hết thời hạn bổ nhiệm.",
  },
  {
    question:
      " 142: Theo Luật Cán bộ, công chức năm 2008, 'công chức cấp xã' là?",
    choices: [
      "     Công chức cấp xã là công dân Việt Nam được tuyển dụng giữ một chức danh chuyên môn, nghiệp vụ thuộc UBND cấp xã, trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "    Công chức cấp xã là người Việt Nam được tuyển dụng giữ một chức danh chuyên môn, nghiệp vụ thuộc UBND cấp xã, trong biên chế và hưởng lương từ ngân sách nhà nước.",
      "     Câu a và b đúng.",
      "    Câu a và b sai.",
    ],
    correct:
      "     Công chức cấp xã là công dân Việt Nam được tuyển dụng giữ một chức danh chuyên môn, nghiệp vụ thuộc UBND cấp xã, trong biên chế và hưởng lương từ ngân sách nhà nước.",
  },
  {
    question:
      " 143: Theo Luật Cán bộ, công chức 2008, đâu không phải quyền của cán bộ, công chức? ",
    choices: [
      "     Cán bộ, công chức được bảo đảm quyền học tập, nghiên cứu khoa học, tham gia các hoạt động kinh tế, xã hội.",
      "    Được hưởng chính sách ưu đãi về nhà ở, phương tiện đi lại, chế độ bảo hiểm xã hội, bảo hiểm y tế theo quy định của pháp luật.",
      "     Nếu bị thương hoặc hy sinh trong khi thi hành công vụ thì được xem xét hưởng chế độ, chính sách như thương binh hoặc được xem xét để công nhận là liệt sĩ và các quyền khác theo quy định của pháp luật.",
      "    Chấp hành nghiêm chỉnh đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước.",
    ],
    correct:
      "    Chấp hành nghiêm chỉnh đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước.",
  },
  {
    question:
      " 144: Theo Luật Cán bộ, công chức năm 2008, căn cứ vào ngạch được bổ nhiệm, những người được bổ nhiệm vào ngạch chuyên viên hoặc tương đương thuộc công chức loại gì?",
    choices: ["    Loại A.", "    Loại B.", "    Loại C.", "    Loại D."],
    correct: "    Loại C.",
  },
  {
    question:
      " 145: Chính phủ có thẩm quyền quy định chế độ quản lý, sử dụng đối với đội ngũ lãnh đạo, quản lý trong doanh nghiệp do Nhà nước nắm giữ bao nhiêu phần trăm vốn điều lệ?",
    choices: ["    Trên 30%", "    Trên 40%", "    Trên 50%", "    Trên 70%"],
    correct: "    Trên 50%",
  },
  {
    question:
      " 146: Theo Luật sửa đổi bổ sung Luật CBCC 2019, cán bộ, công chức đang trong thời hạn xử lý kỷ luật, đang bị điều tra, truy tố, xét xử thì không được:",
    choices: [
      "   Ứng cử, đề cử bổ nhiệm.",
      "   Điều động, luân chuyển biệt phái.",
      "   Đào tạo, bồi dưỡng, nâng ngạch hoặc thôi việc.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question: " 147: Câu nào sau đây là đúng?",
    choices: [
      "   Cơ quan, tổ chức, đơn vị quản lý cán bộ, công chức có thể ra quyết định tạm đình chỉ công tác trong thời gian xem xét, xử lý kỷ luật cán bộ, công chức trong mọi trường hợp.",
      "   Cơ quan, tổ chức, đơn vị quản lý cán bộ, công chức có thể ra quyết định tạm đình chỉ công tác trong thời gian xem xét, xử lý kỷ luật cán bộ, công chức, nếu để cán bộ, công chức đó tiếp tục làm việc có thể gây khó khăn cho việc xem xét, xử lý.",
      "   Cơ quan, tổ chức, đơn vị quản lý cán bộ, công chức không có quyền đưa ra quyết định tạm đình chỉ công tác trong thời gian xem xét, xử lý kỷ luật cán bộ, công chức, mặc dù nếu để cán bộ, công chức đó tiếp tục làm việc có thể gây khó khăn cho việc xem xét, xử lý.",
      "   Tất cả câu trên đều sai.",
    ],
    correct:
      "   Cơ quan, tổ chức, đơn vị quản lý cán bộ, công chức có thể ra quyết định tạm đình chỉ công tác trong thời gian xem xét, xử lý kỷ luật cán bộ, công chức, nếu để cán bộ, công chức đó tiếp tục làm việc có thể gây khó khăn cho việc xem xét, xử lý.",
  },
  {
    question:
      " 1: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây sai về trình tự, thủ tục bổ nhiệm công chức giữ các chức vụ lãnh đạo, quản lý thuộc diện Bộ Chính trị, Ban Bí thư quản lý?",
    choices: [
      "   Trình tự, thủ tục bổ nhiệm công chức giữ các chức vụ lãnh đạo, quản lý thuộc diện Bộ Chính trị, Ban Bí thư quản lý thực hiện theo quy định của Bộ Chính trị về bổ nhiệm cán bộ.",
      "   Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm trước khi trình Ban Bí thư xem xét, quyết định.",
      "   Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm, đồng thời gửi Bộ Chính trị để thẩm định và Ban Tổ chức Trung ương để theo dõi.",
      "   Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm trước khi trình Ban Bí thư xem xét, quyết định.",
    ],
    correct:
      "   Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm, đồng thời gửi Bộ Chính trị để thẩm định và Ban Tổ chức Trung ương để theo dõi.",
  },
  {
    question:
      " 2: Theo nghị định số 138/2020/NĐ-CP, người xác định trúng tuyển công chức phải đáp ứng bao nhiêu điều kiện? KHOẢN 1 ĐIỀU 9",
    choices: ["   01", "  02", "   03", "   04"],
    correct: "  02",
  },
  {
    question:
      "3: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sau đây sai về hồ sơ bổ nhiệm?",
    choices: [
      "Hồ sơ nhân sự bổ nhiệm phải được kê khai trung thực, chính xác, đầy đủ nội dung nêu tại các mục và phải được cấp có thẩm quyền xác nhận hoặc chứng thực theo quy định.",
      "Bản tổng hợp kết quả kiểm phiếu kèm theo biên bản kiểm phiếu ở các bước trong quy trình bổ nhiệm là hồ sơ bổ nhiệm.",
      "Tất cả các chứng chỉ, bằng cấp còn thời hạn là hồ sơ bổ nhiệm.",
      "Bản kê khai tài sản, thu nhập theo mẫu quy định là hồ sơ bổ nhiệm.",
    ],
    correct: "Tất cả các chứng chỉ, bằng cấp còn thời hạn là hồ sơ bổ nhiệm.",
  },
  {
    question:
      "4: Theo nghị định số 138/2020/NĐ-CP; quy trình xem xét miễn nhiệm đối với công chức lãnh đạo, quản lý là?",
    choices: [
      "Khi có đủ căn cứ miễn nhiệm đối với công chức giữ chức vụ lãnh đạo, quản lý quy định tại khoản 1 Điều này, người đứng cơ quan trực tiếp sử dụng công chức hoặc cơ quan tham mưu về tổ chức cán bộ đề xuất với cấp có thẩm quyền theo phân cấp quản lý cán bộ.",
      "Chậm nhất sau 30 ngày kể từ ngày nhận được văn bản đề xuất việc miễn nhiệm, tập thể lãnh đạo cơ quan, tổ chức có thẩm quyền phải thảo luận, biểu quyết bằng phiếu kín.",
      "Việc quyết định miễn nhiệm đối với công chức phải được trên 50% tổng số thành viên tập thể lãnh đạo đồng ý; trường hợp nhân sự đạt tỷ lệ 50% thì do người đứng đầu quyết định.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "5: Theo nghị định số 138/2020/NĐ-CP, đối với các chức vụ cần có sự thẩm định nhân sự của các ban của Trung ương Đảng trước khi Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ quyết định thì ngoài việc thực hiện trình tự, thủ tục bổ nhiệm theo quy định của Bộ Chính trị còn phải thực hiện các công việc nào?",
    choices: [
      "Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm, đồng thời gửi Bộ Nội vụ để thẩm định và Ban Tổ chức Trung ương để theo dõi.",
      "Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ xem xét, quyết định bổ nhiệm nhân sự cụ thể thì đồng thời gửi hồ sơ đề nghị bổ nhiệm cho Bộ Nội vụ để thẩm định.",
      "Bộ Nội vụ có văn bản gửi Ban Tổ chức Trung ương để lấy ý kiến thẩm định của các ban của Trung ương Đảng, sau đó trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ xem xét, quyết định.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "Bộ Nội vụ có văn bản gửi Ban Tổ chức Trung ương để lấy ý kiến thẩm định của các ban của Trung ương Đảng, sau đó trình Ban cán sự đảng Chính phủ, Thủ tướng Chính phủ xem xét, quyết định.",
  },
  {
    question:
      "6: Theo nghị định số 138/2020/NĐ-CP, nội dung tiêu chuẩn, điều kiện bổ nhiệm là?",
    choices: [
      "Bảo đảm tiêu chuẩn chung, tiêu chuẩn chức danh theo quy định của Đảng, Nhà nước và tiêu chuẩn cụ thể của chức vụ bổ nhiệm theo quy định của cơ quan có thẩm quyền.",
      "Phải được quy hoạch chức vụ bổ nhiệm nếu là nguồn nhân sự tại chỗ hoặc được quy hoạch chức vụ tương đương nếu là nguồn nhân sự từ nơi khác.",
      "Có hồ sơ, lý lịch cá nhân được xác minh, có bản kê khai tài sản, thu nhập theo quy định.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "7: Theo nghị định số 138/2020/NĐ-CP, thời hạn giữ chức vụ lãnh đạo, quản lý cho mỗi lần bổ nhiệm là bao nhiêu năm? KHOẢN 1 ĐIỀU 41",
    choices: ["05 năm", "07 năm", "08 năm", "10 năm"],
    correct: "05 năm",
  },
  {
    question:
      "8: Theo nghị định số 138/2020/NĐ-CP; có mấy nội dung trình tự, thủ tục bổ nhiệm công chức giữ các chức vụ lãnh đạo, quản lý thuộc diện Bộ Chính trị, Ban Bí thư quản lý ?",
    choices: ["02", "03", "04", "05"],
    correct: "03",
  },
  {
    question:
      "9: Theo nghị định số 138/2020/NĐ-CP; có bao nhiêu trường hợp xem xét miễn nhiệm đối với công chức lãnh đạo, quản lý ?",
    choices: ["04", "05", "06", "07"],
    correct: "05",
  },
  {
    question:
      "10: Theo nghị định số 138/2020/NĐ-CP; Vòng 1 thi tuyển công chức phần tin học tổng cộng có bao nhiêu câu hỏi?",
    choices: ["10", "20", "30", "60"],
    correct: "30",
  },
  {
    question:
      "11: Theo nghị định số 138/2020/NĐ-CP, chính sách về đào tạo, bồi dưỡng là:",
    choices: [
      "Được cử tham gia các chương trình bồi dưỡng kiến thức cơ bản, tổng quan của ngành, nghề, lĩnh vực công tác phù hợp với định hướng phát triển",
      "Được cử tham gia các khóa đào tạo tập trung trong nước, quốc tế đối với các chương trình phù hợp với ngành, nghề, lĩnh vực phù hợp với định hướng phát triển",
      "Được cử tham gia khóa đào tạo, bồi dưỡng khác phù hợp với đặc thù ngành, lĩnh vực, địa phương do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "12: Theo nghị định số 138/2020/NĐ-CP, chủ thể nào tổ chức việc tuyển dụng và phân công, phân cấp tuyển dụng, sử dụng, đào tạo, bồi dưỡng công chức thuộc phạm vi quản lý? KHOẢN 2 ĐIỀU 74",
    choices: [
      "UBND tỉnh, thành phố trực thuộc Trung ương",
      "Chính phủ",
      "Cơ quan sử dụng công chức",
      "Bộ tư pháp",
    ],
    correct: "UBND tỉnh, thành phố trực thuộc Trung ương",
  },
  {
    question:
      "13: Theo nghị định số 138/2020/NĐ-CP,vòng 2 thi tuyển công chức được diễn ra trong thời gian bao lâu?",
    choices: ["30 phút", "60 phút", "90 phút", "180 phút"],
    correct: "30 phút",
  },
  {
    question:
      "14: Theo nghị định số 138/2020/NĐ-CP, thời gian phải hoàn thành chấm thi vòng 1 kể từ ngày kết thúc thi vòng 1 là bao lâu?",
    choices: ["07 ngày", "15 ngày", "30 ngày", "60 ngày"],
    correct: "15 ngày",
  },
  {
    question:
      "15: Theo nghị định số 138/2020/NĐ-CP, thời gian luân chuyển ít nhất là bao nhiêu lâu đối với 1 lần luân chuyển? (Ngoại trừ trường hợp đặc biệt do cấp có thẩm quyền xem xét, quyết định)",
    choices: ["01 năm", "02 năm", "03 năm", "04 năm"],
    correct: "03 năm",
  },
  {
    question:
      "16: Theo nghị định số 138/2020/NĐ-CP, trách nhiệm người đứng đầu cơ quan, tổ chức sử dụng công chức là?",
    choices: [
      "Hàng năm, tiến hành rà soát, phát hiện người có tài năng trong hoạt động công vụ trong phạm vi cơ quan, tổ chức mình quản lý.",
      "Đề xuất cấp có thẩm quyền đưa vào hoặc đưa ra khỏi danh sách người có tài năng trong hoạt động công vụ.",
      "Chịu trách nhiệm về việc đề xuất hoặc không đề xuất của mình.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "17: Theo nghị định số 138/2020/NĐ-CP, trách nhiệm người đứng đầu cơ quan quản lý công chức là?",
    choices: [
      "Lập danh sách người có tài năng trong hoạt động công vụ trong phạm vi cơ quan, tổ chức quản lý (nếu có).",
      "Xây dựng kế hoạch, chỉ đạo việc thường xuyên rà soát, phát hiện người có tài năng trong hoạt động công vụ.",
      "Quyết định đưa vào hoặc đưa ra khỏi danh sách người có tài năng trong hoạt động công vụ sau khi trao đổi ý kiến với các tổ chức, cá nhân có liên quan.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "18: Theo nghị định số 138/2020/NĐ-CP, có bao nhiêu loại hồ sơ đề nghị kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu?",
    choices: ["06", "07", "08", "09"],
    correct: "08",
  },
  {
    question:
      "19: Theo nghị định số 138/2020/NĐ-CP, có bao nhiêu đối tượng tiếp nhận vào làm công chức?",
    choices: ["03", "04", "05", "06"],
    correct: "05",
  },
  {
    question:
      "20: Theo nghị định số 138/2020/NĐ-CP, có bao nhiêu bước của quy trình luân chuyển?",
    choices: ["05", "06", "07", "08"],
    correct: "05",
  },
  {
    question:
      "21: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sau đây là sai về tiêu chuẩn, điều kiện luân chuyển?",
    choices: [
      "Điều kiện về độ tuổi đủ tiêu chuẩn, điều kiện luân chuyển là còn thời gian công tác ít nhất hai nhiệm kỳ (10 năm) tính từ thời điểm đi luân chuyển.",
      "Công chức lãnh đạo, quản lý luân chuyển để thực hiện quy định không được bố trí người địa phương.",
      "Tiêu chuẩn, điều kiện luân chuyển là có kinh nghiệm làm việc.",
      "Một trong những tiêu chuẩn, điều kiện luân chuyển là có đủ sức khoẻ công tác.",
    ],
    correct:
      "Công chức lãnh đạo, quản lý luân chuyển để thực hiện quy định không được bố trí người địa phương.",
  },
  {
    question:
      "22: Theo nghị định số 138/2020/NĐ-CP, thời gian diễn ra phỏng vấn ở vòng 2 xét tuyển công chức là bao lâu?",
    choices: ["15 phút.", "30 phút.", "60 phút.", "90 phút."],
    correct: "30 phút.",
  },
  {
    question:
      "23: Theo nghị định số 138/2020/NĐ-CP, thi tuyển công chức được thực hiện theo bao nhiêu vòng?",
    choices: ["01 vòng.", "02 vòng.", "03 vòng.", "04 vòng."],
    correct: "02 vòng.",
  },
  {
    question:
      "24: Theo nghị định số 138/2020/NĐ-CP, có bao nhiêu trường hợp được cơ quan cấp trên trực tiếp chủ trì thực hiện quy trình bổ nhiệm?",
    choices: ["03", "04", "05", "06"],
    correct: "04",
  },
  {
    question:
      "25: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sai về tổ chức thực hiện luân chuyển?",
    choices: [
      "Cơ quan tham mưu về tổ chức cán bộ trình cấp có thẩm quyền xem xét, quyết định luân chuyển.",
      "Cơ quan có thẩm quyền tham gia trực tiếp vào việc tổ chức thực hiện quyết định luân chuyển.",
      "Phối hợp với các cơ quan có liên quan theo dõi, nhận xét, đánh giá quá trình thực hiện luân chuyển của công chức luân chuyển.",
      "Phối hợp với các cơ quan có liên quan phân công, bố trí và thực hiện chính sách đối với công chức sau khi luân chuyển.",
    ],
    correct:
      "Cơ quan có thẩm quyền tham gia trực tiếp vào việc tổ chức thực hiện quyết định luân chuyển.",
  },
  {
    question:
      "26: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sai về kế hoạch luân chuyển?",
    choices: [
      "Căn cứ quy hoạch, nhu cầu công tác và năng lực của công chức, cơ quan có thẩm quyền xây dựng kế hoạch luân chuyển công chức lãnh đạo, quản lý thuộc phạm vi quản lý mà không cần trình cơ quan thẩm quyền phê duyệt.",
      "Kế hoạch luân chuyển bao gồm nhu cầu, vị trí, hình thức, địa bàn, thời hạn, chính sách cần thiết đảm bảo thực hiện, dự kiến phương án bố trí sau luân chuyển và thời gian bắt đầu thực hiện kế hoạch luân chuyển.",
      "Trên cơ sở kế hoạch đã được phê duyệt, lập danh sách công chức lãnh đạo, quản lý luân chuyển, nêu biện pháp thực hiện cụ thể đối với từng trường hợp và thực hiện luân chuyển.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "Căn cứ quy hoạch, nhu cầu công tác và năng lực của công chức, cơ quan có thẩm quyền xây dựng kế hoạch luân chuyển công chức lãnh đạo, quản lý thuộc phạm vi quản lý mà không cần trình cơ quan thẩm quyền phê duyệt.",
  },
  {
    question:
      "27: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sau đây sai về Trình tự, thủ tục bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý thuộc thẩm quyền quản lý của Bộ, ngành, địa phương?",
    choices: [
      "Cơ quan, tổ chức có nhu cầu bổ nhiệm công chức lãnh đạo, quản lý phải trình cơ quan có thẩm quyền bổ nhiệm bằng văn bản về chủ trương, số lượng, nguồn nhân sự.",
      "Cấp có thẩm quyền xem xét, quyết định về chủ trương bổ nhiệm chậm nhất sau 10 ngày kể từ ngày nhận được đề nghị của cơ quan, tổ chức.",
      "Cơ quan, tổ chức có nhu cầu bổ nhiệm trình Ban cán sự Đảng Chính phủ, Thủ tướng Chính phủ cho ý kiến thống nhất về chủ trương bổ nhiệm trước khi trình Ban Bí thư xem xét, quyết định.",
      "Chậm nhất sau 15 ngày kể từ ngày có văn bản đồng ý về chủ trương bổ nhiệm của cấp có thẩm quyền, người đứng đầu cơ quan, tổ chức phải tiến hành quy trình lựa chọn nhân sự theo quy định.",
    ],
    correct:
      "Cơ quan, tổ chức có nhu cầu bổ nhiệm công chức lãnh đạo, quản lý phải trình cơ quan có thẩm quyền bổ nhiệm bằng văn bản về chủ trương, số lượng, nguồn nhân sự.",
  },
  {
    question:
      "28: Theo nghị định số 138/2020/NĐ-CP, xét tuyển công chức được thực hiện gồm bao nhiêu vòng?",
    choices: ["01 vòng.", "02 vòng.", "03 vòng.", "04 vòng."],
    correct: "02 vòng.",
  },
  {
    question:
      "29: Theo nghị định số 138/2020/NĐ-CP, người trúng tuyển trong kỳ thi tuyển công chức phải có điều kiện nào trong các điều kiện sau đây?",
    choices: [
      "Có kết quả điểm thi tại vòng 2 đạt từ 50 điểm trở lên. Trường hợp thi kết hợp phỏng vấn và viết thì người dự thi phải dự thi đủ phỏng vấn và viết.",
      "Có kết quả điểm thi tại vòng 2 cộng với điểm ưu tiên quy định cao hơn lấy theo thứ tự điểm từ cao xuống thấp trong chỉ tiêu được tuyển dụng của từng vị trí việc làm.",
      "Có kết quả điểm thi tại vòng 2 cộng không tính điểm ưu tiên quy định cao hơn lấy theo thứ tự điểm từ cao xuống thấp trong chỉ tiêu được tuyển dụng của từng vị trí việc làm.",
      "Câu a và b đúng.",
    ],
    correct: "Câu a và b đúng.",
  },
  {
    question:
      "30: Theo nghị định số 138/2020/NĐ-CP, trước ngày hết thời hạn bổ nhiệm, cấp có thẩm quyền kéo dài thời gian giữ chức vụ lãnh đạo, quản lý phải ra thông báo thực hiện việc xem xét kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu đối với công chức chậm nhất bao nhiêu ngày?",
    choices: ["10", "30", "60", "90"],
    correct: "90",
  },
  {
    question:
      "32: Theo nghị định số 138/2020/NĐ-CP, thời gian phải hoàn thành chấm thi vòng 2 kể từ ngày kết thúc thi vòng 2 là bao lâu?",
    choices: ["07 ngày.", "15 ngày.", "30 ngày.", "60 ngày."],
    correct: "15",
  },
  {
    question:
      "33: Theo nghị định số 138/2020/NĐ-CP, thang điểm của vòng phỏng vấn (vòng 2) xét tuyển công chức là?",
    choices: ["50", "100", "150", "200"],
    correct: "100",
  },
  {
    question:
      " 34: Theo nghị định số 138/2020/NĐ-CP, hội đồng tuyển dụng công chức có bao nhiêu thành viên?",
    choices: [
      "   05 hoặc 07 người.",
      "    03 hoặc 05 người.",
      "     04 hoặc 08 người.",
      "    05 hoặc 10 người.",
    ],
    correct: "   05 hoặc 07 người.",
  },
  {
    question:
      " 35: Theo nghị định số 138/2020/NĐ-CP, người tập sự phải tuân thủ những nội dung nào?",
    choices: [
      "   Nắm vững quy định cdủa pháp luật về công chức; nắm vững cơ cấu tổ chức, chức năng, nhiệm vụ, quyền hạn của cơ quan công tác; nội quy, quy chế làm việc của cơ quan và chức trách, nhiệm vụ của vị trí việc làm được tuyển dụng.",
      "   Trau dồi kiến thức và kỹ năng chuyên môn, nghiệp vụ theo yêu cầu của vị trí việc làm được tuyển dụng.",
      "   Tập giải quyết, thực hiện các công việc của vị trí việc làm được tuyển dụng.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct: "    Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 36: Theo nghị định số 138/2020/NĐ-CP, có bao nhiêu trường hợp chưa thực hiện quy trình bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ lãnh đạo, quản lý?",
    choices: ["   03", "   04", "   05", "   06"],
    correct: "03",
  },
  {
    question:
      " 37: Theo nghị định số 138/2020/NĐ-CP, nội dung nào sai về trách nhiệm trong công tác bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý?",
    choices: [
      "     Người đứng đầu, các thành viên trong cấp ủy, lãnh đạo cơ quan, tổ chức có trách nhiệm đề xuất nhân sự và nhận xét, đánh giá đối với nhân sự được đề xuất.",
      "    Tập thể cấp ủy, tập thể lãnh đạo cơ quan, tổ chức thảo luận, nhận xét, đánh giá, quyết định hoặc đề nghị cấp có thẩm quyền xem xét, quyết định.",
      "     Cơ quan tham mưu về tổ chức cán bộ và các cơ quan liên quan không phải chịu trách nhiệm về kết quả thẩm định, đề xuất nhân sự theo chức năng, nhiệm vụ và quyền hạn của mình.",
      "    Tập thể lãnh đạo, người đứng đầu quyết định bổ nhiệm chịu trách nhiệm đối với quyết định của mình; lãnh đạo, chỉ đạo công tác kiểm tra, giám sát và xử lý vi phạm về công tác cán bộ.",
    ],
    correct:
      "     Cơ quan tham mưu về tổ chức cán bộ và các cơ quan liên quan không phải chịu trách nhiệm về kết quả thẩm định, đề xuất nhân sự theo chức năng, nhiệm vụ và quyền hạn của mình.",
  },
  {
    question:
      "38: Theo nghị định số 138/2020/NĐ-CP, việc tuyển dụng công chức thông qua hình thức xét tuyển do cơ quan có thẩm quyền tuyển dụng công chức quyết định và được thực hiện riêng đối với từng nhóm đối tượng nào sau đây?",
    choices: [
      "Người cam kết tình nguyện làm việc từ 05 năm trở lên ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn.",
      "Người học theo chế độ cử tuyển theo quy định của Luật Giáo dục, sau khi tốt nghiệp về công tác tại địa phương nơi cử đi học.",
      "Sinh viên tốt nghiệp xuất sắc, nhà khoa học trẻ tài năng.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "39: Theo nghị định 138/2020/NĐ-CP, được thực hiện trong các trường hợp sau đây:",
    choices: [
      "Theo yêu cầu nhiệm vụ cụ thể.",
      "Theo quy hoạch, kế hoạch sử dụng công chức trong cơ quan, tổ chức và giữa các cơ quan, tổ chức theo quyết định của cơ quan có thẩm quyền.",
      "Chuyển đổi vị trí công tác theo quy định của Đảng và pháp luật.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "40: Theo nghị định số 138/2020/NĐ-CP, ai là người thành lập hội đồng tuyển dụng công chức?",
    choices: [
      "Người đứng đầu cơ quan có thẩm quyền tuyển dụng.",
      "Bộ trưởng bộ tài chính.",
      "Bộ trưởng bộ công thương.",
      "Thủ tướng chính phủ.",
    ],
    correct: "Người đứng đầu cơ quan có thẩm quyền tuyển dụng.",
  },
  {
    question:
      "41: Theo Nghị định số 138/2020/NĐ-CP, tại nội dung thủ tục bổ nhiệm lại, trình tự thực hiện khi tập thể lãnh đạo cơ quan, tổ chức thảo luận và biểu quyết nhân sự là?",
    choices: [
      "Xem xét để bổ nhiệm lại báo cáo tự nhận xét, đánh giá việc thực hiện chức trách, nhiệm vụ trong thời gian giữ chức vụ; tham gia góp ý kiến và bỏ phiếu tín nhiệm bằng phiếu kín.",
      "Phân tích kết quả lấy phiếu ở hội nghị cán bộ chủ chốt; xác minh, kết luận những vấn đề mới nảy sinh; lấy ý kiến bằng văn bản của ban thường vụ đảng ủy hoặc đảng ủy cơ quan; thảo luận, nhận xét, đánh giá và biểu quyết nhân sự bằng phiếu kín.",
      "Trực tiếp ra quyết định bổ nhiệm lại theo thẩm quyền.",
      "Tất cả câu trên đều sai.",
    ],
    correct:
      "Xem xét để bổ nhiệm lại báo cáo tự nhận xét, đánh giá việc thực hiện chức trách, nhiệm vụ trong thời gian giữ chức vụ; tham gia góp ý kiến và bỏ phiếu tín nhiệm bằng phiếu kín.",
  },
  {
    question:
      "42: Theo nghị định số 138/2020/NĐ-CP, tại nội dung hồ sơ bổ nhiệm, sơ yếu lý lịch do cá nhân tự khai theo mẫu quy định, được cơ quan trực tiếp quản lý xác nhận, có dán ảnh màu khổ 4x6 cần được chụp trong thời gian?",
    choices: [
      "Không quá 4 tháng.",
      "Không quá 6 tháng.",
      "Không quá 8 tháng.",
      "Không quá 10 tháng.",
    ],
    correct: "Không quá 6 tháng.",
  },
  {
    question:
      "43: Theo nghị định số 138/2020/NĐ-CP, công chức được cơ quan, tổ chức phân công hướng dẫn tập sự được hưởng hệ số phụ cấp trách nhiệm bằng bao nhiêu so với mức lương cơ sở trong thời gian hướng dẫn tập sự?",
    choices: ["0,3", "0,4", "0,5", "0,7"],
    correct: "0,3",
  },
  {
    question:
      "44: Theo nghị định số 138/2020/NĐ-CP, trường hợp người trúng tuyển không hoàn thiện đủ hồ sơ tuyển dụng theo quy định hoặc có hành vi gian lận, người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức có quyền xử lý như thế nào?",
    choices: [
      "Giữ nguyên kết quả thi tuyển",
      "Hủy bỏ kết quả",
      "Tùy trường hợp xử lý",
      "Xem như không biết",
    ],
    correct: "Hủy bỏ kết quả",
  },
  {
    question:
      "45: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây là sai ? (ĐIỀU 41)",
    choices: [
      "Thời hạn giữ chức vụ lãnh đạo, quản lý không được quá hai nhiệm kỳ liên tiếp được thực hiện theo quy định của Đảng và pháp luật chuyên ngành.",
      "Thời hạn giữ chức vụ lãnh đạo, quản lý cho mỗi lần bổ nhiệm là 05 năm, tính từ thời điểm quyết định bổ nhiệm có hiệu lực.",
      "Thời hạn giữ chức vụ lãnh đạo, quản lý không được quá ba nhiệm kỳ liên tiếp được thực hiện theo quy định của Đảng và pháp luật chuyên ngành.",
      "Tất cả câu trên đều đúng.",
    ],
    correct:
      "Thời hạn giữ chức vụ lãnh đạo, quản lý không được quá ba nhiệm kỳ liên tiếp được thực hiện theo quy định của Đảng và pháp luật chuyên ngành.",
  },
  {
    question:
      "46: Theo nghị định số 138/2020/NĐ-CP; Chậm nhất sau bao nhiêu ngày làm việc kể từ ngày công chức đến nhận việc, người đứng đầu cơ quan sử dụng phải cử công chức cùng ngạch hoặc ngạch cao hơn, có năng lực và kinh nghiệm về chuyên môn, nghiệp vụ hướng dẫn người tập sự?",
    choices: ["05 ngày", "07 ngày", "14 ngày", "21 ngày"],
    correct: "05 ngày",
  },
  {
    question:
      "47: Theo nghị định số 138/2020/NĐ-CP, Bao nhiêu ngày kể từ ngày có quyết định phê duyệt kết quả tuyển dụng, Hội đồng tuyển dụng phải thông báo công khai trên trang thông tin điện tử hoặc cổng thông tin điện tử của cơ quan có thẩm quyền tuyển dụng công chức và gửi thông báo công nhận kết quả trúng tuyển bằng văn bản tới người dự tuyển theo địa chỉ mà người dự tuyển đã đăng ký. Nội dung thông báo phải ghi rõ thời hạn người trúng tuyển phải đến cơ quan có thẩm quyền tuyển dụng để hoàn thiện hồ sơ tuyển dụng?",
    choices: ["05 ngày", "10 ngày", "15 ngày", "30 ngày"],
    correct: "15 ngày",
  },
  {
    question: "48: Nghị định số 138/2020/NĐ-CP được ký vào ngày nào?",
    choices: ["27/11/2020", "27/12/2020", "28/11/2020", "28/12/2020"],
    correct: "27/11/2020",
  },
  {
    question:
      "49: Theo nghị định số 138/2020/NĐ-CP; Đối với các chức vụ thuộc diện Bộ Chính trị, Ban Bí thư quản lý, thẩm quyền bổ nhiệm thực hiện theo quy định : KHOẢN 1 ĐIỀU 44",
    choices: [
      "Của Bộ Chính trị về phân cấp quản lý cán bộ.",
      "Về phân cấp quản lý cán bộ của cấp ủy đảng các cấp.",
      "Của Bộ Nội vụ về phân cấp quản lý cán bộ.",
      "Không đáp án nào trong 3 đáp án trên.",
    ],
    correct: "Của Bộ Chính trị về phân cấp quản lý cán bộ.",
  },
  {
    question:
      "50: Theo nghị định 138/2020/NĐ-CP, đâu là những chế độ, chính sách đối với công chức được điều động, biệt phái?",
    choices: [
      "Công chức giữ chức vụ lãnh đạo, quản lý được điều động, biệt phái đến vị trí công tác khác mà phụ cấp chức vụ mới thấp hơn phụ cấp chức vụ hiện đang đảm nhiệm thì được bảo lưu phụ cấp chức vụ trong thời gian 06 tháng.",
      "Cơ quan, tổ chức cử công chức biệt phái có trách nhiệm trả lương và bảo đảm các quyền lợi khác của công chức trong thời gian được cử biệt phái, bố trí công việc phù hợp cho công chức khi hết thời hạn biệt phái.",
      "Trường hợp công chức được biệt phái đến làm việc ở miền núi, biên giới, hải đảo, vùng sâu, vùng xa, vùng dân tộc thiểu số, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng các chế độ, chính sách ưu đãi theo quy định của pháp luật.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "51: Theo nghị định số 138/2020/NĐ-CP; Chậm nhất bao nhiêu ngày kể từ ngày người trúng tuyển hoàn thiện hồ sơ tuyển dụng, người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức ra quyết định tuyển dụng và gửi quyết định tới người trúng tuyển theo địa chỉ đã đăng ký?",
    choices: ["10 ngày", "15 ngày", "20 ngày", "30 ngày"],
    correct: "15 ngày",
  },
  {
    question:
      "52: Theo nghị định số 138/2020/NĐ-CP; Trong thời hạn bao nhiêu ngày kể từ ngày nhận được quyết định tuyển dụng, người được tuyển dụng vào công chức phải đến cơ quan nhận việc, trừ trường hợp quyết định tuyển dụng quy định thời hạn khác hoặc được cơ quan có thẩm quyền tuyển dụng công chức đồng ý gia hạn?",
    choices: ["10 ngày", "20 ngày", "30 ngày", "60 ngày"],
    correct: "30 ngày",
  },
  {
    question:
      "53:Theo nghị định số 138/2020/NĐ-CP;  Nội dung thông báo tuyển dụng công chức bao gồm bao nhiêu nội dung?",
    choices: ["03", "04", "05", "06"],
    correct: "05",
  },
  {
    question:
      "54: Theo nghị định 138/2020/NĐ-CP, đâu là cơ quan được phân công tổ chức thi nâng ngạch công chức từ ngạch chuyên viên chính lên ngạch chuyên viên cao cấp?",
    choices: [
      "Bộ Nội vụ chủ trì tổ chức thi nâng ngạch công chức từ ngạch chuyên viên chính lên ngạch chuyên viên cao cấp trong các cơ quan nhà nước.",
      "Ban Tổ chức Trung ương chủ trì, phối hợp với Bộ Nội vụ tổ chức thi nâng ngạch công chức từ ngạch chuyên viên chính lên ngạch chuyên viên cao cấp trong các cơ quan của Đảng Cộng sản Việt Nam, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội.",
      "Cơ quan quản lý ngạch công chức chuyên ngành của Đảng chủ trì, phối hợp với Ban Tổ chức Trung ương; các bộ, cơ quan ngang bộ quản lý ngạch công chức chuyên ngành chủ trì, phối hợp với Bộ Nội vụ tổ chức thi nâng ngạch công chức chuyên ngành tương đương ngạch chuyên viên chính lên ngạch công chức chuyên ngành tương đương ngạch chuyên viên cao cấp theo quy định tại Nghị định 138.",
      "Câu a và b đúng.",
    ],
    correct: "Câu a và b đúng.",
  },
  {
    question:
      "55: Theo nghị định số 138/2020/NĐ-CP; trước ngày hết thời hạn bổ nhiệm, cấp có thẩm quyền bổ nhiệm phải ra thông báo thực hiện quy trình xem xét bổ nhiệm lại đối với công chức chậm nhất bao nhiêu ngày?",
    choices: ["10 ngày", "30 ngày", "60 ngày", "90 ngày"],
    correct: "90 ngày",
  },
  {
    question:
      "56: Theo nghị định 138/2020/NĐ-CP, chủ thể nào ban hành Nội quy, Quy chế tổ chức kỳ thi nâng ngạch công chức?",
    choices: [
      "     Văn phòng Chính phủ.",
      "    Thủ tướng.",
      "     Chủ tịch nước.",
      "    Bộ Nội vụ.",
    ],
    correct: "    Bộ Nội vụ.",
  },
  {
    question:
      "57: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây là đúng về bổ nhiệm trong các trường hợp khác?",
    choices: [
      "     Chức vụ công chức đang giữ ở cơ quan, tổ chức cũ tương đương hoặc cao hơn chức vụ công chức dự kiến đảm nhiệm ở cơ quan, tổ chức mới thì tập thể lãnh đạo và người đứng đầu cơ quan, tổ chức trực tiếp xem xét, quyết định chuyển đổi chức vụ theo vị trí việc làm mới tương ứng",
      "    Trường hợp đổi tên cơ quan, tổ chức thì tập thể lãnh đạo và người đứng đầu cơ quan, tổ chức trực tiếp xem xét, quyết định chuyển đổi chức vụ theo vị trí việc làm mới tương ứng",
      "     Chức vụ công chức đang giữ ở cơ quan, tổ chức cũ thấp hơn chức vụ công chức dự kiến đảm nhiệm ở cơ quan, tổ chức mới thì việc bổ nhiệm được thực hiện theo quy trình bổ nhiệm đối với nguồn nhân sự từ nơi khác",
      "    Tất cả câu trên đều đúng.",
    ],
    correct:
      "     Chức vụ công chức đang giữ ở cơ quan, tổ chức cũ thấp hơn chức vụ công chức dự kiến đảm nhiệm ở cơ quan, tổ chức mới thì việc bổ nhiệm được thực hiện theo quy trình bổ nhiệm đối với nguồn nhân sự từ nơi khác",
  },
  {
    question:
      "58: Theo nghị định số 138/2020/NĐ-CP; nội dung nào đúng về thẩm quyền quyết định bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu?",
    choices: [
      "     Cấp cao hơn có thể thực hiện việc bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý.",
      "    Cấp nào có thẩm quyền quyết định bổ nhiệm thì cấp đó thực hiện việc bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý.",
      "     Cấp thấp hơn có thể thực hiện việc bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý.",
      "   Tất cả câu trên đều đúng.",
    ],
    correct:
      "    Cấp nào có thẩm quyền quyết định bổ nhiệm thì cấp đó thực hiện việc bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý.",
  },
  {
    question:
      "59: Theo nghị định số 138/2020/NĐ-CP; Chậm nhất bao nhiêu ngày làm việc kể từ ngày nhận được báo cáo của người tập sự và nhận xét, đánh giá của người hướng dẫn tập sự, người đứng đầu cơ quan sử dụng công chức đánh giá phẩm chất chính trị, đạo đức và kết quả công việc của người tập sự. Trường hợp người tập sự đạt yêu cầu, người đứng đầu cơ quan sử dụng công chức có văn bản đề nghị người đứng đầu cơ quan quản lý công chức quyết định bổ nhiệm ngạch và xếp lương cho công chức được tuyển dụng?",
    choices: ["05 ngày", "07 ngày", "14 ngày", "21 ngày"],
    correct: "05 ngày",
  },
  {
    question:
      "60: Theo nghị định số 138/2020/NĐ-CP; Đối với công chức loại C, thời gian tập sự là bao lâu?",
    choices: ["06 tháng", "12 tháng", "18 tháng", "24 tháng"],
    correct: "12 tháng",
  },
  {
    question:
      "61: Theo nghị định số 138/2020/NĐ-CP; có bao nhiêu bước thực hiện quy trình bổ nhiệm đối với nguồn nhân sự tại chỗ?",
    choices: ["04", "05", "06", "07"],
    correct: "05",
  },
  {
    question:
      "62: Theo nghị định số 138/2020/NĐ-CP; Thời hạn nhận phiếu đăng ký dự tuyển công chức là bao lâu kể từ ngày thông báo tuyển dụng công khai?",
    choices: ["07 ngày", "30 ngày", "60 ngày", "90 ngày"],
    correct: "30 ngày",
  },
  {
    question:
      "63: Theo nghị định 138/2020/NĐ-CP, Khi tổ chức thi nâng ngạch công chức, người đứng đầu cơ quan có thẩm quyền tổ chức thi nâng ngạch công chức quy định tại Điều 32 Nghị định 138 thực hiện các nhiệm vụ sau:",
    choices: [
      "Xây dựng Đề án tổ chức thi nâng ngạch công chức.",
      "Xác định chỉ tiêu nâng ngạch công chức phù hợp với vị trí việc làm và cơ cấu công chức của từng cơ quan, tổ chức thuộc và trực thuộc.",
      "Thành lập Hội đồng thi nâng ngạch công chức.",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "64: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây sai về điều kiện về độ tuổi bổ nhiệm?",
    choices: [
      "Công chức được đề nghị bổ nhiệm lần đầu giữ chức vụ lãnh đạo, quản lý hoặc đề nghị bổ nhiệm giữ chức vụ lãnh đạo, quản lý cao hơn thì tuổi bổ nhiệm phải còn đủ 05 năm công tác tính từ khi thực hiện quy trình bổ nhiệm",
      "Công chức được đề nghị bổ nhiệm vào chức vụ lãnh đạo, quản lý mà thời hạn mỗi lần bổ nhiệm dưới 05 năm theo quy định của pháp luật chuyên ngành và của cơ quan có thẩm quyền thì tuổi bổ nhiệm phải đủ một nhiệm kỳ",
      "Công chức được đề nghị bổ nhiệm lần đầu giữ chức vụ lãnh đạo, quản lý hoặc đề nghị bổ nhiệm giữ chức vụ lãnh đạo, quản lý cao hơn chỉ cần có đủ khả năng làm việc",
      "Công chức được điều động, bổ nhiệm giữ chức vụ mới tương đương hoặc thấp hơn chức vụ đang giữ thì không tính tuổi bổ nhiệm theo quy định",
    ],
    correct:
      "Công chức được đề nghị bổ nhiệm lần đầu giữ chức vụ lãnh đạo, quản lý hoặc đề nghị bổ nhiệm giữ chức vụ lãnh đạo, quản lý cao hơn chỉ cần có đủ khả năng làm việc",
  },
  {
    question:
      "65: Theo nghị định số 138/2020/NĐ-CP; Có bao nhiêu trách nhiệm trong công tác bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý?",
    choices: ["05", "06", "07", "08"],
    correct: "06",
  },
  {
    question:
      "66: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây đúng về hồ sơ bổ nhiệm lại, kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu?",
    choices: [
      "Hồ sơ đề nghị bổ nhiệm lại thực hiện như quy định đối với hồ sơ bổ nhiệm công chức giữ chức vụ lãnh đạo, quản lý",
      "Biên bản họp và kết quả kiểm phiếu đề nghị kéo dài thời gian giữ chức vụ lãnh đạo, quản lý của tập thể lãnh đạo cơ quan, tổ chức là hồ sơ đề nghị kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu",
      "Sơ yếu lý lịch do cá nhân tự khai theo mẫu quy định, được cơ quan trực tiếp quản lý xác nhận, có dán ảnh màu khổ 4x6, chụp trong thời gian không quá 06 tháng là hồ sơ đề nghị kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "67: Theo nghị định số 138/2020/NĐ-CP; nội dung nào đúng về nhận xét, đánh giá đối với công chức luân chuyển khi hết thời gian luân chuyển?",
    choices: [
      "Công chức luân chuyển tự kiểm điểm về quá trình công tác trong thời gian luân chuyển",
      "Tập thể lãnh đạo và cấp ủy cơ quan, tổ chức nhận xét, đánh giá công chức luân chuyển trong thời gian công tác tại địa phương, cơ quan, tổ chức",
      "Cấp có thẩm quyền quyết định luân chuyển nhận xét, đánh giá",
      "Tất cả câu trên đều đúng",
    ],
    correct: "Tất cả câu trên đều đúng",
  },
  {
    question:
      "68: Theo nghị định 138/2020/NĐ-CP, chủ thể nào chủ trì xây dựng và cung cấp ngân hàng đáp án thi môn kiến thức chung cho các kỳ thi nâng ngạch công chức?",
    choices: [
      "Văn phòng Chính phủ.",
      "Thủ tướng.",
      "Chủ tịch nước.",
      "Bộ Nội vụ.",
    ],
    correct: "Bộ Nội vụ.",
  },
  {
    question:
      "69: Theo nghị định số 138/2020/NĐ-CP; Khi hết thời gian tập sự, người tập sự phải báo cáo kết quả tập sự bằng văn bản; người hướng dẫn tập sự phải nhận xét, đánh giá kết quả tập sự đối với người tập sự bằng văn bản. Các văn bản này được gửi cho ai?",
    choices: [
      "Người đứng đầu cơ quan sử dụng công chức",
      "Người quản lý trực tiếp tập sự",
      "Giảng viên đại học đã từng học",
      "Bố mẹ người tập sự",
    ],
    correct: "Người đứng đầu cơ quan sử dụng công chức",
  },
  {
    question:
      "70: Theo nghị định số 138/2020/NĐ-CP; Người tập sự bị huỷ bỏ quyết định tuyển dụng được cơ quan sử dụng công chức trợ cấp bao nhiêu tháng lương, phụ cấp hiện hưởng và tiền tàu xe về nơi cư trú?",
    choices: ["01 tháng", "02 tháng", "03 tháng", "04 tháng"],
    correct: "01 tháng",
  },
  {
    question:
      "71: Theo nghị định số 138/2020/NĐ-CP; có bao nhiêu tiêu chuẩn, điều kiện bổ nhiệm lại? (ĐIỀU 50)",
    choices: ["04", "05", "06", "07"],
    correct: "06",
  },
  {
    question:
      "72: Theo nghị định số 138/2020/NĐ-CP; việc xem xét từ chức đối với công chức giữ chức vụ lãnh đạo, quản lý được thực hiện trong trường hợp nào?",
    choices: [
      "Tự nguyện thôi giữ chức vụ để chuyển giao vị trí lãnh đạo",
      "Do tự nhận thấy không đủ tiêu chuẩn, điều kiện, sức khỏe để hoàn thành nhiệm vụ được giao hoặcvị trí công tác không phù hợp",
      "Vì các lý do chính đáng khác của công chức",
      "Tất cả câu trên đều đúng.",
    ],
    correct: "Tất cả câu trên đều đúng.",
  },
  {
    question:
      "73: Theo nghị định số 138/2020/NĐ-CP; Nội dung nào sau đây đúng về từ chức đối với công chức lãnh đạo, quản lý?",
    choices: [
      "Công chức giữ chức vụ lãnh đạo, quản lý được từ chức nếu đang trong thời gian chịu sự thanh tra, kiểm tra, điều tra của cơ quan chức năng có thẩm quyền theo quy định của Đảng và pháp luật",
      "Công chức giữ chức vụ lãnh đạo, quản lý được từ chức nếu đang phòng chống thiên tai, dịch bệnh",
      "Công chức giữ chức vụ lãnh đạo, quản lý không được từ chức nếu đang đảm nhận nhiệm vụ quốc phòng, an ninh quốc gia",
      "Công chức giữ chức vụ lãnh đạo, quản lý được từ chức nếu đang đảm nhận nhiệm vụ trọng yếu, cơ mật; phòng chống thiên tai",
    ],
    correct:
      "Công chức giữ chức vụ lãnh đạo, quản lý không được từ chức nếu đang đảm nhận nhiệm vụ quốc phòng, an ninh quốc gia",
  },
  {
    question:
      "74: Theo nghị định số 138/2020/NĐ-CP; có bao nhiêu nội dung quản lý công chức?",
    choices: ["10", "12", "14", "16"],
    correct: "12",
  },
  {
    question:
      "75: Theo nghị định số 138/2020/NĐ-CP; tiêu chuẩn, điều kiện bổ nhiệm lại là?",
    choices: [
      "Hoàn thành nhiệm vụ trong thời hạn giữ chức vụ lãnh đạo, quản lý",
      "Đáp ứng tiêu chuẩn chức danh lãnh đạo, quản lý theo quy định của cơ quan có thẩm quyền tại thời điểm bổ nhiệm lại",
      "Cơ quan, tổ chức có nhu cầu về vị trí việc làm lãnh đạo, quản lý.",
      "Tất cả câu trên đều đúng",
    ],
    correct: "Tất cả câu trên đều đúng",
  },
  {
    question:
      " 76: Theo nghị định 138/2020/NĐ-CP, đâu là căn cứ, nguyên tắc, tiêu chuẩn dự thi nâng ngạch công chức?",
    choices: [
      "     Việc nâng ngạch công chức phải căn cứ vào vị trí việc làm, phù hợp với cơ cấu ngạch công chức của cơ quan sử dụng công chức đã được cấp có thẩm quyền phê duyệt.",
      "    Căn cứ vào số lượng chỉ tiêu nâng ngạch của cơ quan, tổ chức sử dụng công chức đã được cấp có thẩm quyền phê duyệt, cơ quan quản lý công chức có trách nhiệm rà soát, xác định và lập danh sách công chức có đủ tiêu chuẩn, điều kiện dự thi nâng ngạch.",
      "     Cơ quan quản lý công chức chịu trách nhiệm trước pháp luật về tiêu chuẩn, điều kiện của công chức được cử tham dự kỳ thi nâng ngạch và lưu giữ, quản lý hồ sơ đăng ký dự thi nâng ngạch của công chức theo quy định của pháp luật.",
      "    Tất cả câu trên đều đúng.",
    ],
    correct: "    Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 77: Theo nghị định số 138/2020/NĐ-CP; trách nhiệm của công chức được đề xuất, xem xét bổ nhiệm là ?",
    choices: [
      "     Kê khai lý lịch, hồ sơ cá nhân, kê khai tài sản, thu nhập của mình, giải trình các nội dung liên quan",
      "    Kết quả thẩm định, đề xuất nhân sự theo chức năng, nhiệm vụ và quyền hạn của mình",
      "     Lãnh đạo, chỉ đạo công tác kiểm tra, giám sát và xử lý vi phạm về công tác cán bộ",
      "    Đề xuất nhân sự và nhận xét, đánh giá đối với nhân sự được đề xuất",
    ],
    correct:
      "     Kê khai lý lịch, hồ sơ cá nhân, kê khai tài sản, thu nhập của mình, giải trình các nội dung liên quan",
  },
  {
    question:
      " 78: Theo nghị định số 138/2020/NĐ-CP;  Sau khi hoàn thành việc chấm thi vòng 2, chậm nhất bao nhiêu ngày làm việc, Hội đồng tuyển dụng phải báo cáo người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức xem xét, phê duyệt kết quả tuyển dụng?",
    choices: ["   05 ngày", "    07 ngày", "     14 ngày", "    30 ngày"],
    correct: "   05 ngày",
  },
  {
    question:
      " 79: Theo nghị định số 138/2020/NĐ-CP; Thời gian tập sự có được tính vào thời gian xét nâng bậc lương hay không?",
    choices: [
      " Có",
      "   Không",
      "   Có thể nếu tập sự tốt",
      "   Do vụ trưởng vụ tổ chức quyết định",
    ],
    correct: "   Không",
  },
  {
    question:
      " 80: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây đúng về thủ tục kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu ?",
    choices: [
      "    Chậm nhất 90 ngày trước ngày hết thời hạn bổ nhiệm, cấp có thẩm quyền kéo dài thời gian giữ chức vụ lãnh đạo, quản lý phải ra thông báo thực hiện việc xem xét kéo dài thời gian giữ chức vụ lãnh đạo, quản lý đến tuổi nghỉ hưu đối với công chức",
      "   Công chức làm báo cáo tự nhận xét, đánh giá việc thực hiện chức trách, nhiệm vụ trong thời gian giữ chức vụ, gửi cấp có thẩm quyền kéo dài thời gian giữ chức vụ lãnh đạo, quản lý",
      "   Người đứng đầu và tập thể lãnh đạo cơ quan, tổ chức thảo luận, xem xét, nếu công chức còn sức khỏe, uy tín, đáp ứng được yêu cầu nhiệm vụ thì thống nhất biểu quyết bằng phiếu kín",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 81: Theo nghị định 138/2020/NĐ-CP, thời hạn biệt phái công chức không quá bao nhiêu năm (trừ trường hợp thực hiện theo quy định của pháp luật chuyên ngành) ?",
    choices: ["     02 năm.", "    03 năm.", "    04 năm.", "    05 năm."],
    correct: "    03 năm.",
  },
  {
    question:
      " 82: Theo nghị định số 138/2020/NĐ-CP;  Đối với công chức loại D, thời gian tập sự là bao lâu?",
    choices: ["   06 tháng", "    12 tháng", "    18 tháng", "    24 tháng"],
    correct: "   06 tháng",
  },
  {
    question:
      " 83: Theo nghị định số 138/2020/NĐ-CP; khi nhân sự do cơ quan cấp trên có thẩm quyền dự kiến điều động, bổ nhiệm từ nguồn nhân sự ngoài cơ quan, tổ chức thì cơ quan tham mưu về tổ chức cán bộ của cơ quan cấp trên có thẩm quyền dự kiến điều động, bổ nhiệm cần tiến hành :",
    choices: [
      "     Trao đổi ý kiến với tập thể lãnh đạo và cấp ủy cơ quan, tổ chức tiếp nhận nhân sự về dự kiến điều động, bổ nhiệm.",
      "    Gặp nhân sự được dự kiến điều động, bổ nhiệm để trao đổi ý kiến về yêu cầu nhiệm vụ công tác",
      "     Chủ trì, phối hợp với các cơ quan liên quan thẩm định về nhân sự",
      "    Tất cả câu trên đều đúng.",
    ],
    correct: "    Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 84: Theo nghị định số 138/2020/NĐ-CP;  Trong thời gian tập sự, người tập sự được hưởng bao nhiêu phần trăm lương bậc 1 của ngạch tuyển dụng? (KHOẢN 1 ĐIỀU 22)",
    choices: ["     50%", "    70%", "     85%", "    100%"],
    correct: "     85%",
  },
  {
    question:
      " 85: Theo nghị định số 138/2020/NĐ-CP;  Đối với viên chức công tác tại đơn vị sự nghiệp công lập thì yêu cầu bao nhiêu năm công tác trở lên?",
    choices: ["     03", "    04", "    05", "    06"],
    correct: "05",
  },
  {
    question:
      " 86: Theo nghị định số 138/2020/NĐ-CP; nội dung thời điểm, thời hạn và nguyên tắc thực hiện bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ lãnh đạo, quản lý là ?",
    choices: [
      "    Hoàn thành nhiệm vụ trong thời hạn giữ chức vụ lãnh đạo, quản lý",
      "   Công chức lãnh đạo, quản lý khi hết thời hạn giữ chức vụ bổ nhiệm theo quy định thì cơ quan, tổ chức có thẩm quyền phải tiến hành quy trình xem xét bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ lãnh đạo, quản lý",
      "   Đáp ứng tiêu chuẩn chức danh lãnh đạo, quản lý theo quy định của cơ quan có thẩm quyền tại thời điểm bổ nhiệm lại",
      "   Tất cả câu trên đều đúng.",
    ],
    correct:
      "   Công chức lãnh đạo, quản lý khi hết thời hạn giữ chức vụ bổ nhiệm theo quy định thì cơ quan, tổ chức có thẩm quyền phải tiến hành quy trình xem xét bổ nhiệm lại hoặc kéo dài thời gian giữ chức vụ lãnh đạo, quản lý",
  },
  {
    question:
      " 87: Theo nghị định số 138/2020/NĐ-CP;  Chủ tịch Hội đồng thành viên, Chủ tịch Hội đồng quản trị, Chủ tịch công ty, Thành viên Hội đồng thành viên, Thành viên Hội đồng quản trị, Kiểm soát viên, Tổng giám đốc, Phó Tổng giám đốc, Giám đốc, Phó giám đốc, Kế toán trưởng và người đang giữ chức vụ, chức danh quản lý từ cấp phòng trở lên trong doanh nghiệp do Nhà nước nắm giữ 100% vốn điều lệ thì yêu cầu bao nhiêu năm công tác trở lên?",
    choices: ["     03", "    04", "     05", "    06"],
    correct: "05",
  },
  {
    question:
      " 88: Theo nghị định số 138/2020/NĐ-CP; nội dung nào sau đây là đúng về thủ tục bổ nhiệm lại?",
    choices: [
      "     Chậm nhất 90 ngày trước ngày hết thời hạn bổ nhiệm, cấp có thẩm quyền bổ nhiệm phải ra thông báo thực hiện quy trình xem xét bổ nhiệm lại đối với công chức",
      "    Công chức làm báo cáo tự nhận xét, đánh giá việc thực hiện chức trách, nhiệm vụ trong thời hạn giữ chức vụ gửi cấp có thẩm quyền bổ nhiệm",
      "     Công chức được đề nghị bổ nhiệm lại phải đạt tỷ lệ trên 50% tính trên tổng số người được triệu tập tham gia hội nghị cán bộ chủ chốt giới thiệu",
      "   Tất cả câu trên đều đúng.",
    ],
    correct: "   Tất cả câu trên đều đúng.",
  },
  {
    question:
      " 89: Theo nghị định số 138/2020/NĐ-CP; Bao nhiêu ngày kể từ ngày nhận được thông báo kết quả trúng tuyển, người trúng tuyển phải đến cơ quan có thẩm quyền tuyển dụng công chức để hoàn thiện hồ sơ tuyển dụng?",
    choices: ["     05 ngày", "    10 ngày", "     15 ngày", "     30 ngày"],
    correct: "     30 ngày",
  },
];

export default quiz1;
