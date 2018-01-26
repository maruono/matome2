#ここに本来controllers.coffeeである記述を行う

angular.module('starter.controllers', [])
.controller('DashCtrl', ($scope) ->
  $("#buttestok").click =>
    doAfter = ->
      $('#memotest').focus()
  
    setTimeout(doAfter, 10)

# ---
# generated by js2coffee 2.2.0
    
    #console.log $(':focus')
)

.controller('TestCtrl', ($scope) ->
  #cpm_tom = new Cpm_tom()
  edit_memo = new Edit_memo()
  
  $('#memosd').css
    "resize": "none"
  area_auto_size = new Area_auto_size("memosd")
  
  $scope.$on '$ionicView.enter', (event, data) ->
    edit_memo = new Edit_memo()
    area_auto_size.story1()
    $('#memosd').focus()


  $("#memosd").keyup ->
    console.log "keyup"
    edit_memo.save()
    
  $("#titled").keyup ->
    edit_memo.save()
    

  
  
  $("#insert_h2").click =>
    doAfter = ->
      new Insert_caret("memosd", "## ")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
  
  $("#insert_yoko").click =>
    doAfter = ->
      new Insert_caret("memosd", "\n---\n")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
    
  $("#insert_list").click =>
    doAfter = ->
      new Insert_caret("memosd", "- ")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
    
  $("#insert_hutoi").click =>
    doAfter = ->
      new Insert_caret("memosd", "**input**")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
    
  $("#insert_bq").click =>
    doAfter = ->
      new Insert_caret("memosd", "> ")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
    
  $("#insert_strikethrough").click =>
    doAfter = ->
      new Insert_caret("memosd", "~~ input ~~")
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
    
  $("#insert_home").click =>
    doAfter = ->
      new End_and_home().home()
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
  
  $("#insert_end").click =>
    doAfter = ->
      new End_and_home().end()
      area_auto_size.story1()
      edit_memo.save()
    setTimeout(doAfter, 10)
  

      
      
)

.controller('ChatsCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    select_memo_disp = new Select_memo_disp("str33")
    select_memo_disp.title_memo_disp()
    
    
  
)
.controller('AdsCtrl', ($scope) ->
  $scope.showUpAd = ->
    console.log "広告"
    adspace = document.getElementById('adspace')
    if adspace
      # 広告が読み込めていれば、nend_adspace...がDOMに追加される。
      if document.getElementById('nend_adspace_' + nend_params.site + '_' + nend_params.spot)
        nend = document.getElementById('nend')
        # index.html内で事前に読み込んだ広告を取得
        adspace.replaceChild nend, adspace.firstChild
      else
        # 広告が取得できない(ネットワークの問題やブラウザで見てる場合)ときはテキストを表示する
        message = 'Temporally not available.'
        adspace.replaceChild document.createTextNode(message), adspace.firstChild
      # index.html内で広告が表示されるのを防ぐために付してあるhiddenクラスを排除する
      adspace.firstChild.className = ''
     return

)
.controller 'AccountCtrl', ($scope) ->
  $scope.$on '$ionicView.enter', (event, data) ->
    new Disp("accountdisp").delete()
    addradio = new Add_radio("accountdisp", "betu")
    addradio.story1()
    addradio.story2()
    addradio.story3()

  $("#add_title").click =>
    test111 = new Add_title("input_title")
    test111.story1()
  $("#delete").click =>
    myRet = confirm("delete ?")
    if myRet == true
      new Delete_button()
    

# ---
# generated by js2coffee 2.2.0s