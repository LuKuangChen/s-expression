// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Core__List from "@rescript/core/src/Core__List.mjs";
import * as SExpression from "../src/SExpression.mjs";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

function test_parse(ignoreLangLineOpt, str, wanted_result) {
  var ignoreLangLine = ignoreLangLineOpt !== undefined ? ignoreLangLineOpt : false;
  var result;
  var exit = 0;
  var elms;
  try {
    elms = SExpression.SExpr.fromString(ignoreLangLine, str);
    exit = 1;
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === SExpression.SExpressionError) {
      result = "Error: " + SExpression.$$Error.toString(err._1);
    } else {
      throw err;
    }
  }
  if (exit === 1) {
    result = Core__List.toArray(Core__List.map(elms, SExpression.SExpr.toString)).join(" ");
  }
  if (result !== wanted_result) {
    console.log("Test failed:");
    console.log("  Input:");
    console.log("     " + str);
    console.log("  Wanted result:");
    console.log("     " + wanted_result);
    console.log("  Actual result:");
    console.log("     " + result);
    console.log("----------------");
    return ;
  }
  
}

test_parse(undefined, "(", "Error: reached the end of the file while processing a list.");

test_parse(undefined, "\"", "Error: reached the end of the file while processing a string.");

test_parse(undefined, "(]", "Error: found a closing square bracket while processing a list started with a round bracket.");

test_parse(undefined, "[)", "Error: found a closing round bracket while processing a list started with a square bracket.");

test_parse(undefined, "()", "()");

test_parse(undefined, "[]", "[]");

test_parse(undefined, ")", "Error: found an extra closing round bracket at 1:1.");

test_parse(undefined, "]", "Error: found an extra closing square bracket at 1:1.");

test_parse(undefined, "#t", "#t");

test_parse(undefined, "#f", "#f");

test_parse(undefined, "42", "42");

test_parse(undefined, "\"foo\" \"bar\"", "\"foo\" \"bar\"");

test_parse(undefined, "((a) () #t 42)", "((a) () #t 42)");

test_parse(undefined, "\"\\n\"", "\"\n\"");

test_parse(undefined, "\"\\t\"", "\"\t\"");

test_parse(undefined, "\"\\?\"", "Error: found an unexpected escape sequence (\\?).");

test_parse(undefined, "#;(ignore this s-expression) 2 3", "2 3");

test_parse(undefined, "\n;; ignroe this line\n2\n3\n", "2 3");

test_parse(true, "#lang\n2 3", "2 3");

test_parse(true, "\n\n\n\n#lang foo\n\n2\n3\n", "2 3");

export {
  test_parse ,
}
/*  Not a pure module */
