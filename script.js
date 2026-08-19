(function () {
  "use strict";

  /* ---------------- Data ---------------- */

  var CATEGORIES = [
    { id: "youth",       icon: "🧑‍🎓", name: "청년",        desc: "청년 자산·주거·구직" },
    { id: "startup",     icon: "🏪",   name: "창업·소상공인", desc: "창업자금, 정책자금" },
    { id: "housing",     icon: "🏠",   name: "주거",        desc: "전월세, 주택자금" },
    { id: "welfare",     icon: "🤝",   name: "복지·생활",    desc: "기초생활, 돌봄" },
    { id: "employment",  icon: "💼",   name: "고용·취업",    desc: "구직, 직업훈련" },
    { id: "education",   icon: "📚",   name: "교육·보육",    desc: "학자금, 보육료" },
    { id: "agriculture", icon: "🌾",   name: "농업·어업",    desc: "농어업 경영지원" },
    { id: "culture",     icon: "🎨",   name: "문화·에너지",  desc: "문화누리, 에너지바우처" }
  ];

  var PROGRAMS = [
    {
      id: "p01", category: "youth", tag: "인기",
      title: "청년월세 한시지원",
      summary: "무주택 청년 1인가구의 월세 부담을 줄여주는 지원제도입니다.",
      target: "만 19~34세 무주택 청년, 소득·재산 기준 충족자",
      benefit: "월 최대 20만 원, 최대 12개월 지원",
      period: "연중 상시 접수 (예산 소진 시 종료)"
    },
    {
      id: "p02", category: "youth", tag: "신규",
      title: "청년내일저축계좌",
      summary: "일하는 청년의 목돈 마련을 돕기 위한 자산형성 지원제도입니다.",
      target: "만 19~34세 근로 청년 중 소득 기준 충족자",
      benefit: "매월 저축액에 정부지원금 매칭 적립",
      period: "연 1회 정기 모집"
    },
    {
      id: "p03", category: "startup", tag: "인기",
      title: "소상공인 정책자금 지원",
      summary: "자금난을 겪는 소상공인에게 저리로 사업자금을 지원합니다.",
      target: "업력·매출 요건을 충족하는 소상공인",
      benefit: "업체당 최대 수천만 원, 저금리 대출",
      period: "분기별 접수 (조기 마감 가능)"
    },
    {
      id: "p04", category: "startup", tag: "상시",
      title: "청년창업사관학교",
      summary: "예비·초기 창업자에게 사업화 자금과 멘토링을 함께 지원합니다.",
      target: "만 39세 이하 예비창업자 및 창업 3년 이내 기업",
      benefit: "사업화 자금 및 전담 코칭 지원",
      period: "연 1~2회 모집 공고"
    },
    {
      id: "p05", category: "housing", tag: "상시",
      title: "전세자금 보증지원",
      summary: "무주택 세대의 전세보증금 마련을 위한 저리 대출을 보증합니다.",
      target: "무주택 세대주, 소득·자산 기준 충족자",
      benefit: "낮은 금리의 전세자금 대출 보증",
      period: "연중 상시"
    },
    {
      id: "p06", category: "housing", tag: "신규",
      title: "신혼부부 주택자금 지원",
      summary: "신혼부부의 내 집 마련을 돕기 위한 주택구입·전세자금 지원입니다.",
      target: "혼인 7년 이내 신혼부부, 무주택 세대",
      benefit: "저금리 주택자금 대출 지원",
      period: "연중 상시"
    },
    {
      id: "p07", category: "welfare", tag: "상시",
      title: "기초생활보장 생계급여",
      summary: "생계유지가 어려운 가구에 최저생활비를 지원합니다.",
      target: "소득인정액이 기준 중위소득 이하인 가구",
      benefit: "가구원 수에 따른 월 생계급여 지급",
      period: "연중 상시 신청"
    },
    {
      id: "p08", category: "welfare", tag: "상시",
      title: "긴급복지지원",
      summary: "갑작스러운 위기 상황에 처한 가구에 신속히 생계비를 지원합니다.",
      target: "실직, 질병 등으로 생계가 곤란해진 가구",
      benefit: "생계비, 의료비 등 위기상황별 지원",
      period: "위기 발생 시 수시 신청"
    },
    {
      id: "p09", category: "employment", tag: "인기",
      title: "국민취업지원제도",
      summary: "구직자에게 맞춤형 취업지원 서비스와 구직촉진수당을 지원합니다.",
      target: "만 15~69세 취업취약계층 및 저소득 구직자",
      benefit: "월 구직촉진수당 및 취업지원서비스",
      period: "연중 상시 신청"
    },
    {
      id: "p10", category: "employment", tag: "상시",
      title: "국민내일배움카드",
      summary: "직업훈련 비용을 지원해 재취업과 직무능력 향상을 돕습니다.",
      target: "구직자, 재직자 등 (일부 제외 대상 있음)",
      benefit: "1인당 훈련비 한도 내 카드 발급",
      period: "연중 상시 신청"
    },
    {
      id: "p11", category: "education", tag: "상시",
      title: "국가장학금",
      summary: "대학생의 등록금 부담을 줄여주는 소득연계형 장학금입니다.",
      target: "국내 대학 재학 중인 소득 기준 충족 학생",
      benefit: "소득분위별 등록금 일부~전액 지원",
      period: "학기별 정기 신청"
    },
    {
      id: "p12", category: "education", tag: "상시",
      title: "아이돌봄서비스 지원",
      summary: "맞벌이 가정 등의 아이 돌봄 비용을 일부 지원합니다.",
      target: "만 12세 이하 아동을 둔 가정",
      benefit: "소득기준에 따른 돌봄 이용요금 차등 지원",
      period: "연중 상시 신청"
    },
    {
      id: "p13", category: "agriculture", tag: "상시",
      title: "농업경영체 육성자금",
      summary: "농업인의 영농 규모화와 경영 안정을 위한 자금을 지원합니다.",
      target: "농업경영체 등록 농업인",
      benefit: "저금리 장기 융자 지원",
      period: "연 1회 정기 접수"
    },
    {
      id: "p14", category: "agriculture", tag: "신규",
      title: "청년후계농 영농정착지원",
      summary: "영농 초기 청년농의 안정적인 정착을 위한 생활안정자금입니다.",
      target: "만 18~39세 독립경영 3년 이하 청년농",
      benefit: "월 최대 정착지원금 지급(최대 3년)",
      period: "연 1회 정기 모집"
    },
    {
      id: "p15", category: "culture", tag: "상시",
      title: "문화누리카드",
      summary: "저소득층의 문화·여행·체육 활동을 위한 이용권을 지원합니다.",
      target: "기초생활수급자 및 차상위계층",
      benefit: "1인당 연간 문화이용권 포인트 지급",
      period: "연 1회 발급 신청"
    },
    {
      id: "p16", category: "culture", tag: "상시",
      title: "에너지바우처",
      summary: "취약계층의 냉난방 에너지 비용 부담을 줄여주는 이용권입니다.",
      target: "기초생활수급자 중 노인·영유아·장애인 등 포함 가구",
      benefit: "동절기·하절기 에너지 이용권 지급",
      period: "연 1~2회 정기 신청"
    }
  ];

  /* ---------------- State ---------------- */

  var state = {
    query: "",
    category: "all",
    favorites: loadFavorites()
  };

  function loadFavorites() {
    try {
      var raw = localStorage.getItem("jworinuri_favorites");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem("jworinuri_favorites", JSON.stringify(state.favorites));
    } catch (e) { /* ignore */ }
  }

  function toggleFavorite(id) {
    var idx = state.favorites.indexOf(id);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.push(id);
    }
    saveFavorites();
  }

  /* ---------------- Render: Categories ---------------- */

  var categoryGrid = document.getElementById("categoryGrid");
  var filterBar = document.getElementById("filterBar");

  function renderCategories() {
    categoryGrid.innerHTML = "";
    CATEGORIES.forEach(function (cat) {
      var card = document.createElement("div");
      card.className = "category-card";
      card.dataset.category = cat.id;
      card.innerHTML =
        '<div class="category-icon">' + cat.icon + '</div>' +
        '<h3>' + cat.name + '</h3>' +
        '<p>' + cat.desc + '</p>';
      card.addEventListener("click", function () {
        setCategory(cat.id === state.category ? "all" : cat.id);
      });
      categoryGrid.appendChild(card);
    });
  }

  function renderFilterBar() {
    filterBar.innerHTML = "";
    var allChip = document.createElement("button");
    allChip.className = "filter-chip";
    allChip.textContent = "전체";
    allChip.dataset.filter = "all";
    allChip.addEventListener("click", function () { setCategory("all"); });
    filterBar.appendChild(allChip);

    CATEGORIES.forEach(function (cat) {
      var chip = document.createElement("button");
      chip.className = "filter-chip";
      chip.textContent = cat.name;
      chip.dataset.filter = cat.id;
      chip.addEventListener("click", function () { setCategory(cat.id); });
      filterBar.appendChild(chip);
    });
  }

  function syncActiveStates() {
    document.querySelectorAll(".category-card").forEach(function (card) {
      card.classList.toggle("active", card.dataset.category === state.category);
    });
    document.querySelectorAll(".filter-chip").forEach(function (chip) {
      chip.classList.toggle("active", chip.dataset.filter === state.category);
    });
  }

  function setCategory(catId) {
    state.category = catId;
    syncActiveStates();
    renderPrograms();
  }

  /* ---------------- Render: Programs ---------------- */

  var programGrid = document.getElementById("programGrid");
  var emptyState = document.getElementById("emptyState");
  var resultCount = document.getElementById("resultCount");
  var statTotal = document.getElementById("statTotal");

  function getFilteredPrograms() {
    var q = state.query.trim().toLowerCase();
    return PROGRAMS.filter(function (p) {
      var matchesCategory = state.category === "all" || p.category === state.category;
      if (!matchesCategory) return false;
      if (!q) return true;
      var haystack = (p.title + " " + p.summary + " " + p.target).toLowerCase();
      return haystack.indexOf(q) > -1;
    });
  }

  function categoryLabel(catId) {
    var found = CATEGORIES.filter(function (c) { return c.id === catId; })[0];
    return found ? found.name : "";
  }

  function renderPrograms() {
    var list = getFilteredPrograms();
    programGrid.innerHTML = "";

    list.forEach(function (p) {
      var isFav = state.favorites.indexOf(p.id) > -1;
      var card = document.createElement("article");
      card.className = "program-card";
      card.innerHTML =
        '<div class="card-top">' +
          '<span class="card-tag">' + categoryLabel(p.category) + ' · ' + p.tag + '</span>' +
          '<button class="fav-btn' + (isFav ? ' active' : '') + '" data-id="' + p.id + '" aria-label="관심 지원제도 저장">' + (isFav ? '★' : '☆') + '</button>' +
        '</div>' +
        '<h3>' + p.title + '</h3>' +
        '<p class="program-summary">' + p.summary + '</p>' +
        '<div class="card-meta">' +
          '<div><b>지원대상</b><span>' + p.target + '</span></div>' +
          '<div><b>지원내용</b><span>' + p.benefit + '</span></div>' +
          '<div><b>신청시기</b><span>' + p.period + '</span></div>' +
        '</div>';
      programGrid.appendChild(card);
    });

    var favBtns = programGrid.querySelectorAll(".fav-btn");
    favBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.id;
        toggleFavorite(id);
        var isFav = state.favorites.indexOf(id) > -1;
        btn.classList.toggle("active", isFav);
        btn.textContent = isFav ? "★" : "☆";
      });
    });

    resultCount.textContent = list.length;
    emptyState.hidden = list.length !== 0;
  }

  /* ---------------- Search ---------------- */

  var searchInput = document.getElementById("searchInput");
  var searchBtn = document.getElementById("searchBtn");

  function runSearch() {
    state.query = searchInput.value || "";
    renderPrograms();
  }

  searchBtn.addEventListener("click", runSearch);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") runSearch();
  });
  searchInput.addEventListener("input", function () {
    if (searchInput.value === "") runSearch();
  });

  /* ---------------- FAQ ---------------- */

  var FAQS = [
    {
      q: "지원누리알리미는 정부 공식 사이트인가요?",
      a: "아니요. 지원누리알리미는 여러 정부지원제도의 정보를 이해하기 쉽게 정리해 안내하는 민간 정보 서비스입니다. 실제 신청과 심사, 지급은 각 소관 기관에서 진행됩니다."
    },
    {
      q: "지원제도 정보는 얼마나 자주 업데이트되나요?",
      a: "매주 정기적으로 지원제도 정보를 점검하고 업데이트하고 있습니다. 다만 정책 변경 시점에 따라 실제 공고와 차이가 있을 수 있어, 신청 전 소관 기관을 통한 최종 확인을 권장드립니다."
    },
    {
      q: "관심 있는 지원제도는 어떻게 저장하나요?",
      a: "각 지원제도 카드 우측 상단의 별표(☆) 아이콘을 누르면 관심 목록으로 저장되며, 브라우저에 안전하게 보관되어 다음 방문 시에도 확인할 수 있습니다."
    },
    {
      q: "신청 자격이 되는지 정확히 어떻게 확인하나요?",
      a: "본 사이트의 정보는 참고용 요약입니다. 정확한 자격 요건과 필요 서류는 각 지원제도의 소관 기관 공고문을 통해 반드시 다시 확인해주세요."
    }
  ];

  var faqList = document.getElementById("faqList");

  function renderFaq() {
    faqList.innerHTML = "";
    FAQS.forEach(function (item) {
      var wrap = document.createElement("div");
      wrap.className = "faq-item";
      wrap.innerHTML =
        '<button class="faq-question">' + item.q + '<span class="arrow">⌄</span></button>' +
        '<div class="faq-answer"><p>' + item.a + '</p></div>';
      var question = wrap.querySelector(".faq-question");
      var answer = wrap.querySelector(".faq-answer");
      question.addEventListener("click", function () {
        var isOpen = wrap.classList.contains("open");
        faqList.querySelectorAll(".faq-item").forEach(function (el) {
          el.classList.remove("open");
          el.querySelector(".faq-answer").style.maxHeight = null;
        });
        if (!isOpen) {
          wrap.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
      faqList.appendChild(wrap);
    });
  }

  /* ---------------- Nav / misc ---------------- */

  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var open = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  var scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  });
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------- Init ---------------- */

  renderCategories();
  renderFilterBar();
  renderFaq();
  statTotal.textContent = PROGRAMS.length;
  setCategory("all");
})();
