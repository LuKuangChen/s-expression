// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$String from "rescript/lib/es6/string.js";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as SExpression from "../src/SExpression.bs.js";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

function test_parse(str, wanted_result) {
  var result;
  var exit = 0;
  var elms;
  try {
    elms = SExpression.fromString(str);
    exit = 1;
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === SExpression.SExpressionError) {
      result = "Error: " + SExpression.$$Error.toString(err._1) + "";
    } else {
      throw err;
    }
  }
  if (exit === 1) {
    result = $$String.concat(" ", Belt_List.map(elms, SExpression.toString));
  }
  if (result !== wanted_result) {
    console.log("Test failed:");
    console.log("  Input:");
    console.log("     " + str + "");
    console.log("  Wanted result:");
    console.log("     " + wanted_result + "");
    console.log("  Actual result:");
    console.log("     " + result + "");
    console.log("----------------");
    return ;
  }
  
}

test_parse("(", "Error: reached the end of the file while processing a list.");

test_parse("\"", "Error: reached the end of the file while processing a string.");

test_parse("(]", "Error: found a closing square bracket while processing a list started with a round bracket.");

test_parse("[)", "Error: found a closing round bracket while processing a list started with a square bracket.");

test_parse("()", "()");

test_parse("[]", "[]");

test_parse(")", "Error: found an extra closing round bracket at 1:2.");

test_parse("]", "Error: found an extra closing square bracket at 1:2.");

test_parse("#t", "#t");

test_parse("#f", "#f");

test_parse("42", "42");

test_parse("\"foo\" \"bar\"", "\"foo\" \"bar\"");

test_parse("((a) () #t 42)", "((a) () #t 42)");

test_parse("\"\\n\"", "\"\n\"");

test_parse("\"\\t\"", "\"\t\"");

test_parse("\"\\?\"", "Error: found an unexpected escape sequence (\\?).");

test_parse("#;(ignore this s-expression) 2 3", "2 3");

test_parse("\n;; ignroe this line\n2\n3\n", "2 3");

export {
  test_parse ,
}
/*  Not a pure module */
