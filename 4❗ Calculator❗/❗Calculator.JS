// 增加更多的數學算式 

// -------------------------------------------------------------------------------------------------------------------------
/* 
計算器的工作方式：
  1. 當點擊數字時，該數字應顯示在輸入框 (<input>) 中。 ( done )
  2. 當點擊運算符時（如 +, -, *, /, 根號, 次方），應該執行對應的數學運算。
  3. 運算符不應顯示在輸入框中，而是應該在背景中處理計算邏輯。
  4. 點擊 "=" 時，應該計算並顯示結果。
  5. 點擊 "C" (清除) 按鈕時，應該清空輸入框和運算數據。
*/
/* ------------------------------------------------------------------------------------------------------------------------- */
/* 獲取 DOM 元素 */
const input   = document.getElementById("input"); // 顯示輸入數字和結果的欄位
const clean   = document.getElementById("clear"); // 清空輸入框
const power   = document.getElementById("power"); // 次方運算 (如 2^3)
const root    = document.getElementById("root");   // 開平方根運算 (如 √9)
const divide  = document.getElementById("divide"); // 除法
const times   = document.getElementById("times");   // 乘法
const minus   = document.getElementById("minus");   // 減法
const plus    = document.getElementById("plus");     // 加法
const equal   = document.getElementById("equal");   // 等於，計算結果
const numbers = document.querySelectorAll(".number"); // 所有數字按鈕 (0-9)
const symbols = document.querySelectorAll(".symbols");

//  -------------------------------------------------------------------------------------------------------------------------
/* 
  事件處理 (AREA)：
  1. 當用戶點擊數字時，該數字會添加到輸入框中。( done )
  2. 當用戶點擊運算符時，該運算應該儲存在記憶體中，而不是直接顯示在輸入框內。
  3. 當用戶點擊 "=" 時，會根據之前的輸入和運算符進行計算，然後顯示結果。
*/
// -------------------------------------------------------------------------------------------------------------------------
let firstN = "" // First Number
let operator = "" // 運算符號
let secondN ="" // Second Number 

// 當點擊的時候 數字出現在input裡面
 numbers.forEach(btn => {
  btn.addEventListener("click", () => {
    input.value += btn.innerHTML
  })
});

// 點擊運算符時，儲存數字並記住運算
symbols.forEach(btn => {
  btn.addEventListener("click", () => {
    if(input.value === "") return;
    firstN = input.value; // 讓第一個數字 = 現在input 裡面的數字
    operator = btn.innerHTML; // 設置運算符
    input.value = ""; // 完成後 input value 設為空
  });
});

// 執行事件 Event Executing
equal.addEventListener("click", () => {
  if(input.value === "" || firstN === "") return;
  secondN = input.value;
  let result = 0;

  // 根據運算符進行計算
  switch(operator) {
    case "÷":
      if (secondN === "0") {
        alert("Cannot divide by zero");
        return;
      }
      result = parseFloat(firstN) / parseFloat(secondN);
      break;
    case "x":
      result = parseFloat(firstN) * parseFloat(secondN);
      break;
    case "+":
      result = parseFloat(firstN) + parseFloat(secondN);
      break;
    case "-":
      result = parseFloat(firstN) - parseFloat(secondN);
      break;
    case "^":
      result = Math.pow(parseFloat(firstN), parseFloat(secondN));
      break;
    case "√":
      result = Math.sqrt(parseFloat(firstN));
      break;
    default:
      alert("Invalid operation");
      return;
  }
  input.value = result;
});

// 清除input
clean.addEventListener("click" ,() => {
  input.value = "";
})
const test ="gay";
 
// -------------------------------------------------------------------------------------------------------------------------
/* 
  錯誤處理 (AREA)：
  1. 防止連續點擊運算符（如輸入 "+++" 這種無效輸入）。
  2. 防止除以零錯誤。
  3. 如果輸入框為空時，不應該執行 "=" 計算。
*/
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
/* 
  可擴展性 (工程計算機)：
  - 如果想加入更多運算（如 sin, cos, log），可以在此基礎上新增對應的按鈕與事件處理函數。
*/
// -------------------------------------------------------------------------------------------------------------------------