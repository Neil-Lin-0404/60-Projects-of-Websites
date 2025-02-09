const text = document.getElementById("input"); // 獲取輸入框元素
const list = document.getElementById("list"); // 獲取任務列表元素
document.getElementById("add").addEventListener("click", function () {
    if (text.value === "") { // 如果輸入框為空，顯示提示信息
        alert("Please enter a task");
    } else {
        let li = document.createElement("li"); // 創建新的列表項
        li.innerHTML = text.value; // 設置列表項的內容為輸入框的值
        var span = document.createElement('span'); // 創建刪除按鈕
        span.innerHTML = '\u00d7'; // 設置刪除按鈕的內容為 "×"
        li.appendChild(span); // 將刪除按鈕添加到列表項
        list.appendChild(li); // 將列表項添加到任務列表
    }
    text.value = ""; // 清空輸入框
});

list.addEventListener('click', function(a) {
    if (a.target.tagName === 'LI') { // 如果點擊的是列表項，切換完成狀態
        a.target.classList.toggle('done'); 
    } else if (a.target.tagName === 'SPAN') { // 如果點擊的是刪除按鈕，刪除列表項
        a.target.parentElement.remove();
    }
}, false); // `false` 表示事件處理程序在冒泡階段執行
// 冒泡階段是事件傳遞的一個階段，事件從最深的目標元素開始，然後逐步向上冒泡到其父元素，直到到達最外層的元素。
// 最深的目標元素是指事件最初發生的元素，例如點擊事件中的被點擊的元素。
// 最外層的元素是指包含所有其他元素的根元素，通常是 document 或 window。

// 當 `false` 作為第三個參數傳遞給 `addEventListener` 時，事件處理程序會在冒泡階段執行。
// 如果不傳遞 `false` 或傳遞 `true`，事件處理程序會在捕獲階段執行。
// 捕獲階段是事件從最外層元素開始，逐步向下傳遞到最深目標元素的過程。

// 例子：
// 在冒泡階段，點擊 span 元素時，事件會先觸發 span 的點擊事件處理程序，然後觸發 li 的點擊事件處理程序。
// 在捕獲階段，點擊 span 元素時，事件會先觸發 li 的點擊事件處理程序，然後觸發 span 的點擊事件處理程序。

// 意義：
// 冒泡階段和捕獲階段的區別在於事件處理程序的執行順序。
// 在某些情況下，你可能希望在事件到達目標元素之前攔截它（捕獲階段），或者在事件從目標元素冒泡回來時處理它（冒泡階段）。
// 這可以幫助你更靈活地控制事件的處理邏輯，特別是在處理複雜的 DOM 結構和事件委託時。

// TODO : LEARN ( Don't Remove )