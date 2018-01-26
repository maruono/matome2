// Generated by CoffeeScript 1.10.0
var Add_radio, Add_title, Area_auto_size, Click_coffee, Cpm, Cpm_tom, Delete_button, Delete_strage, Disp, Edit_memo, End_and_home, Insert_caret, Rss_test, Select_memo_disp, Select_strage, TestCtrl, Title_and_memo;

Click_coffee = (function() {
  function Click_coffee(object) {
    this.object = object;
    alert(this.object);
    alert("start.rbで実行してるんやで");
  }

  Click_coffee.prototype.story1 = function() {
    return $(this.object).click((function(_this) {
      return function() {
        alert(_this.object);
        return alert(123);
      };
    })(this));
  };

  return Click_coffee;

})();


/*
aa = new TestCtrl ("#btn12")
aa.story1()
 */

TestCtrl = (function() {
  function TestCtrl() {}

  TestCtrl.prototype.story1 = function() {
    return alert("story1です");
  };

  TestCtrl.prototype.story2 = function() {

    /*
    document.addEventListener("deviceready", onDeviceReady, false)
    db = window.openDatabase("database", "1.0", "testdatabase", 1000000);
     */
    var db, description, name, size, version;
    name = 'localdb';
    version = '1.0';
    description = 'Web SQL Database';
    size = 2 * 1024 * 1024;
    db = openDatabase(name, version, description, size);
    return db.transaction(function(tx) {
      return tx.executeSql('insert into user (id, name) values (?, ?)', [1, '金田']);
    });
  };

  TestCtrl.prototype.story3 = function() {};

  return TestCtrl;

})();

Disp = (function() {
  function Disp(id) {
    this.id = id;
  }

  Disp.prototype.disp = function(str) {
    this.str = str;
    return document.getElementById(this.id).innerHTML = this.str;
  };

  Disp.prototype.add = function(str) {
    var my_div, newDiv;
    this.str = str;
    newDiv = document.createElement("div");
    newDiv.innerHTML = this.str;
    my_div = document.getElementById("org_div1");
    return document.getElementById(this.id).insertBefore(newDiv, my_div);
  };

  Disp.prototype["delete"] = function() {
    return document.getElementById(this.id).innerHTML = "";
  };

  return Disp;

})();

Cpm = (function() {
  function Cpm(id) {
    this.id = id;
  }

  Cpm.prototype.plus = function() {
    var getstr, num;
    getstr = localStorage.getItem(this.id);
    num = parseInt(getstr, 10);
    if (isNaN(num)) {
      return localStorage.setItem(this.id, 1);
    } else {
      return localStorage.setItem(this.id, num + 1);
    }
  };

  Cpm.prototype.minus = function() {
    var getstr, num;
    getstr = localStorage.getItem(this.id);
    num = parseInt(getstr, 10);
    if (isNaN(num)) {
      return localStorage.setItem(this.id, -1);
    } else {
      return localStorage.setItem(this.id, num - 1);
    }
  };

  return Cpm;

})();

Cpm_tom = (function() {
  function Cpm_tom() {
    var i, j, key, num, ref;
    this.strdisp = new Disp("str");
    this.converter = new showdown.Converter();
    this.converter.setOption('tables', 'true');
    this.cpm = new Cpm("memo_num");
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    for (i = j = 0, ref = num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      this.strdisp.add(localStorage.getItem(i));
    }
  }

  Cpm_tom.prototype.save = function(input) {
    var i, input_word, j, key, mark2html, num, ref, results;
    this.input = input;
    this.cpm.plus();
    input_word = document.getElementById(this.input).value;
    mark2html = this.converter.makeHtml(input_word);
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    localStorage.setItem(num, mark2html);
    this.strdisp["delete"]();
    results = [];
    for (i = j = 0, ref = num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(this.strdisp.add(localStorage.getItem(i)));
    }
    return results;
  };

  return Cpm_tom;

})();

Select_strage = (function() {
  function Select_strage(input_key, input_value) {
    this.input_key = input_key;
    this.input_value = input_value;
  }

  Select_strage.prototype.story1 = function(key1, value1) {
    this.key = key1;
    this.value = value1;
    document.getElementById(this.input_key).value;
    return localStorage.setItem(this.key, this.value);
  };

  Select_strage.prototype.story2 = function() {
    var key, value;
    key = document.getElementById(this.input_key).value;
    value = document.getElementById(this.input_value).value;
    return localStorage.setItem(key, value);
  };

  return Select_strage;

})();

Add_radio = (function() {
  function Add_radio(div, name1) {
    this.div = div;
    this.name = name1;
    this.strdisp = new Disp(this.div);
  }

  Add_radio.prototype.add = function(value1, disp_name) {
    this.value = value1;
    this.disp_name = disp_name;
    return this.strdisp.add("<label class=\"item item-radio ng-empty ng-valid\" name=\"" + this.name + "\" ng-model=\"choice\" ng-value=\"\'" + this.value + "\'\" value=\"" + this.value + "\" style=\"\"> <input type=\"radio\" name=\"" + this.name + "\" ng-value=\"\'" + this.value + "\'\" ng-model=\"choice\" class=\"ng-pristine ng-untouched ng-valid ng-empty\" value=\"" + this.value + "\" style=\"\"> <div class=\"radio-content\"> <div class=\"item-content disable-pointer-events\" ng-transclude=\"\"> <span>" + this.disp_name + "</span> </div> <i class=\"radio-icon disable-pointer-events icon ion-checkmark\"> </i> </div> </label>");
  };

  Add_radio.prototype["delete"] = function() {
    return this["delete"]();
  };

  Add_radio.prototype.story1 = function() {
    var i, j, key, num, ref, results, story1_1, story1_2;
    key = localStorage.getItem("memo_num");
    num = parseInt(key, 10);
    results = [];
    for (i = j = 1, ref = num; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      story1_1 = localStorage.getItem(i);
      console.log("########");
      console.log(story1_1 = localStorage.getItem(i));
      if (story1_1 === null) {
        console.log("nullなんです");
      } else {
        console.log("nullではないんです");
        story1_2 = JSON.parse(story1_1);
        this.add(i, story1_2.title);
      }
      results.push(console.log("########"));
    }
    return results;
  };

  Add_radio.prototype.story2 = function() {
    return $("#" + ("" + this.div)).click((function(_this) {
      return function() {
        var key, value;
        value = $('input[name=betu]:checked').val();
        key = "getradio";
        return localStorage.setItem(key, value);
      };
    })(this));
  };

  Add_radio.prototype.story3 = function() {
    var doAfter;
    console.log("input[name=" + this.name + "]");
    doAfter = function() {
      var radionum;
      radionum = localStorage.getItem("getradio");
      return $("input[name=betu]").val([radionum]);
    };
    return setTimeout(doAfter, 10);
  };

  return Add_radio;

})();

Select_memo_disp = (function() {
  function Select_memo_disp(div) {
    this.div = div;
    this.disp = new Disp(this.div);
    this.value = localStorage.getItem("getradio");
    this.value2 = localStorage.getItem(this.value);
    this.disp.disp(this.value2);
  }

  Select_memo_disp.prototype.title_memo_disp = function() {
    this.disp = new Disp(this.div);
    this.value = localStorage.getItem("getradio");
    this.value2 = localStorage.getItem(this.value);
    this.value3 = JSON.parse(this.value2);
    this.disp2 = new Disp("strtitle");
    this.disp2.disp("<h1>" + this.value3.title + "</h1>");
    this.converter = new showdown.Converter();
    this.converter.setOption('tables', 'true');
    this.converter.setOption('simpleLineBreaks', 'false');
    this.converter.setOption('disableForced4SpacesIndentedSublists', 'true');
    this.converter.setOption('smartIndentationFix', 'false');
    this.converter.setOption('strikethrough', 'true');
    this.mark2html = this.converter.makeHtml(this.value3.memo);
    console.log("###########");
    console.log(this.mark2html);
    console.log("###########");
    this.mark2html;
    this.mark2html = this.mark2html.replace(/<ul>/g, "");
    this.mark2html = this.mark2html.replace("<ol>", "");
    this.mark2html = this.mark2html.replace("</ol>", "");
    console.log(this.mark2html);
    console.log("###########");
    return this.disp.disp(this.mark2html);
  };

  return Select_memo_disp;

})();

Add_title = (function() {
  function Add_title(input) {
    this.input = input;
    this.cpm = new Cpm("memo_num");
  }

  Add_title.prototype.story2 = function() {
    console.log("add title");
    return this.json_title_memo = JSON.stringify({
      title: this.test1,
      memo: this.test2
    });
  };

  Add_title.prototype.story1 = function() {
    var addradio, key, num;
    this.cpm.plus();
    key = localStorage.getItem("memo_num");
    console.log(num = parseInt(key, 10));
    this.test1 = document.getElementById(this.input).value;
    this.story2();
    localStorage.setItem(num, this.json_title_memo);
    new Disp("accountdisp")["delete"]();
    addradio = new Add_radio("accountdisp", "betu");
    addradio.story1();
    addradio.story2();
    return addradio.story3();
  };

  return Add_title;

})();

Delete_button = (function() {
  function Delete_button() {
    var addradio;
    console.log("delete ok");
    this.key = localStorage.getItem("getradio");
    localStorage.removeItem(this.key);
    new Disp("accountdisp")["delete"]();
    addradio = new Add_radio("accountdisp", "betu");
    addradio.story1();
    addradio.story2();
    addradio.story3();
  }

  return Delete_button;

})();

Edit_memo = (function() {
  function Edit_memo() {
    console.log("constructor");
    this.test2 = localStorage.getItem("getradio");
    this.test3 = localStorage.getItem(this.test2);
    if (this.test3 === null) {
      console.log("null");
      alert("select your memo");
    } else {
      this.test4 = JSON.parse(this.test3);
      this.title = this.test4.title;
      this.memo = this.test4.memo;
      document.getElementById("titled").value = this.title;
      document.getElementById("memosd").value = this.memo;
    }
  }

  Edit_memo.prototype.save = function() {
    var json_title_memo;
    console.log("story1");
    this.save1 = document.getElementById("titled").value;
    this.save2 = document.getElementById("memosd").value;
    json_title_memo = JSON.stringify({
      title: this.save1,
      memo: this.save2
    });
    this.save5 = localStorage.getItem("getradio");
    if (this.test3 === null) {
      return console.log("null");
    } else {
      return localStorage.setItem(this.save5, json_title_memo);
    }
  };

  return Edit_memo;

})();

Title_and_memo = (function() {
  function Title_and_memo() {
    console.log("new Title_and_memo");
  }

  Title_and_memo.prototype.save = function() {
    var json_title_memo, obj;
    console.log("save Title_and_memo");
    this.test1 = document.getElementById("titled").value;
    this.test2 = document.getElementById("memosd").value;
    json_title_memo = JSON.stringify({
      title: this.test1,
      memo: this.test2
    });
    console.log(json_title_memo);
    obj = JSON.parse(json_title_memo);
    console.log(obj.title);
    return console.log(obj.memo);
  };

  return Title_and_memo;

})();

Area_auto_size = (function() {
  function Area_auto_size(id) {
    this.id = id;
    console.log("Area_auto_size");
    console.log(this.target_id = "#" + this.id);
    $(this.target_id).height(30);
    $(this.target_id).css('lineHeight', '20px');
    $(this.target_id).on('input', function(evt) {
      var lineHeight;
      console.log("####evt = " + evt);
      console.log($('#memosd').focus());
      if (evt.target.scrollHeight > evt.target.offsetHeight) {
        $(evt.target).height(evt.target.scrollHeight);
      } else {
        lineHeight = Number($(evt.target).css('lineHeight').split('px')[0]);
        while (true) {
          $(evt.target).height($(evt.target).height() - lineHeight);
          if (evt.target.scrollHeight > evt.target.offsetHeight) {
            $(evt.target).height(evt.target.scrollHeight);
            break;
          }
        }
      }
    });
  }

  Area_auto_size.prototype.story1 = function() {
    var lineHeight, obj;
    $(this.target_id).height(30);
    $(this.target_id).css('lineHeight', '20px');
    console.log(obj = $("#memosd").get(0));
    if (obj.scrollHeight > obj.offsetHeight) {
      return $(obj).height(obj.scrollHeight);
    } else {
      lineHeight = Number($(obj).css('lineHeight').split('px')[0]);
      while (true) {
        $(obj).height($(obj).height() - lineHeight);
        if (obj.scrollHeight > obj.offsetHeight) {
          $(obj).height(obj.scrollHeight);
          break;
        }
      }
    }
  };

  return Area_auto_size;

})();

Delete_strage = (function() {
  function Delete_strage(delkey) {
    this.delkey = delkey;
    console.log(this.delkey);
    this.const1 = document.getElementById(this.delkey).value;
    console.log(this.const1);
    localStorage.removeItem(this.const1);
  }

  return Delete_strage;

})();

Insert_caret = (function() {
  function Insert_caret(target, str) {
    var np, obj, p, r, s;
    this.target = target;
    this.str = str;
    obj = $("#" + this.target);
    obj.focus();
    if (navigator.userAgent.match(/MSIE/)) {
      r = document.selection.createRange();
      r.text = this.str;
      r.select();
    } else {
      s = obj.val();
      p = obj.get(0).selectionStart;
      np = p + this.str.length;
      obj.val(s.substr(0, p) + this.str + s.substr(p));
      obj.get(0).setSelectionRange(np, np);
    }
    return;
  }

  return Insert_caret;

})();

End_and_home = (function() {
  function End_and_home() {}

  End_and_home.prototype.home = function() {
    var len, obj, t;
    obj = $('#memotest').focus();
    console.log(obj.get(0).selectionStart);
    t = document.getElementById('memosd');
    len = t.value.length;
    t.focus();
    return t.setSelectionRange(0, 0);
  };

  End_and_home.prototype.end = function() {
    var len, t;
    $('#memotest').focus();
    t = document.getElementById('memosd');
    len = t.value.length;
    t.focus();
    return t.setSelectionRange(len, len);
  };

  return End_and_home;

})();

Rss_test = (function() {
  function Rss_test() {
    console.log("new Rss_test");
  }

  return Rss_test;

})();

angular.module('starter.controllers', []).controller('DashCtrl', function($scope) {
  return $("#buttestok").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        return $('#memotest').focus();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
}).controller('TestCtrl', function($scope) {
  var area_auto_size, edit_memo;
  edit_memo = new Edit_memo();
  $('#memosd').css({
    "resize": "none"
  });
  area_auto_size = new Area_auto_size("memosd");
  $scope.$on('$ionicView.enter', function(event, data) {
    edit_memo = new Edit_memo();
    area_auto_size.story1();
    return $('#memosd').focus();
  });
  $("#memosd").keyup(function() {
    console.log("keyup");
    return edit_memo.save();
  });
  $("#titled").keyup(function() {
    return edit_memo.save();
  });
  $("#insert_h2").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "## ");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_yoko").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "\n---\n");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_list").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "- ");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_hutoi").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "**input**");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_bq").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "> ");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_strikethrough").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new Insert_caret("memosd", "~~ input ~~");
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  $("#insert_home").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new End_and_home().home();
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
  return $("#insert_end").click((function(_this) {
    return function() {
      var doAfter;
      doAfter = function() {
        new End_and_home().end();
        area_auto_size.story1();
        return edit_memo.save();
      };
      return setTimeout(doAfter, 10);
    };
  })(this));
}).controller('ChatsCtrl', function($scope) {
  return $scope.$on('$ionicView.enter', function(event, data) {
    var select_memo_disp;
    select_memo_disp = new Select_memo_disp("str33");
    return select_memo_disp.title_memo_disp();
  });
}).controller('AdsCtrl', function($scope) {
  return $scope.showUpAd = function() {
    var adspace, message, nend;
    console.log("広告");
    adspace = document.getElementById('adspace');
    if (adspace) {
      if (document.getElementById('nend_adspace_' + nend_params.site + '_' + nend_params.spot)) {
        nend = document.getElementById('nend');
        adspace.replaceChild(nend, adspace.firstChild);
      } else {
        message = 'Temporally not available.';
        adspace.replaceChild(document.createTextNode(message), adspace.firstChild);
      }
      adspace.firstChild.className = '';
    }
  };
}).controller('AccountCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function(event, data) {
    var addradio;
    new Disp("accountdisp")["delete"]();
    addradio = new Add_radio("accountdisp", "betu");
    addradio.story1();
    addradio.story2();
    return addradio.story3();
  });
  $("#add_title").click((function(_this) {
    return function() {
      var test111;
      test111 = new Add_title("input_title");
      return test111.story1();
    };
  })(this));
  return $("#delete").click((function(_this) {
    return function() {
      var myRet;
      myRet = confirm("delete ?");
      if (myRet === true) {
        return new Delete_button();
      }
    };
  })(this));
});
