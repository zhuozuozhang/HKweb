
//实现内容切换
let content_Company_profile = document.getElementById("content_Company_profile");
let content_organization = document.getElementById("content_organization");
let content_Character_style = document.getElementById("content_Character_style");
let content_Hui_Kan_Culture = document.getElementById("content_Hui_Kan_Culture");
let contentAll = document.getElementById("contentAll");

if(window.name == ""){
    console.log("首次被加载");
    window.name = "isReload";  // 在首次进入页面时我们可以给window.name设置一个固定值
    let right_content = document.getElementById("right_content");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
}else if(window.name == "isReload"){
    console.log("页面被刷新");
    let right_content = document.getElementById("right_content");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
}
//公司简介
$("#Company_profile").click(function () {
    content_Company_profile.className = "";
    content_organization.className = "hide";
    content_Character_style.className = "hide";
    content_Hui_Kan_Culture.className = "hide";
    let right_content = document.getElementById("right_content");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
});
//组织结构
$("#organization").click(function () {
    content_Company_profile.className = "hide";
    content_organization.className = "";
    content_Character_style.className = "hide";
    content_Hui_Kan_Culture.className = "hide";
    let right_content = document.getElementById("right_content1");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
});
//人物风采
$("#Character_style").click(function () {
    content_Company_profile.className = "hide";
    content_organization.className = "hide";
    content_Character_style.className = "";
    content_Hui_Kan_Culture.className = "hide";
    let right_content = document.getElementById("right_content2");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
});
//慧勘文化
$("#Hui_Kan_Culture").click(function () {
    content_Company_profile.className = "hide";
    content_organization.className = "hide";
    content_Character_style.className = "hide";
    content_Hui_Kan_Culture.className = "";
    let right_content = document.getElementById("right_content3");
    let h = right_content.offsetHeight;
    contentAll.style.height =(h+15)+"px";
});
