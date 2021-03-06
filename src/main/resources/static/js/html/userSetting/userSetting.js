var userSetting = (function () {
    var configMap = {
            caption_html:
                '<div>' +
                '   <div style="margin:0%auto;width:200px;float:left;position:relative;">' +
                '       <label class="input"></label>' +
                '   </div>' +
                '   <div style="margin: 0% 20px 0% 0%;float:right">' +
                '       <button class="btn btn-primary" type="button" id="doAddAction" onclick="userSetting.onAddClick(this)">新增</button>' +
                '   </div></div>',
            addHtml:
                '<form id="addDialogForm" class="smart-form" autocomplete="off">' +
                '<fieldset>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="userName">' +
                '       <span class="input-group-addon">账号</span>' +
                '       <input class="form-control" name="userName">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="password">' +
                '       <span class="input-group-addon">密码</span>' +
                '       <input type="password" class="form-control" name="password" autocomplete="new-password">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="name">' +
                '       <span class="input-group-addon">昵称</span>' +
                '       <input class="form-control" name="name" >' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="phoneNum">' +
                '       <span class="input-group-addon">手机号码</span>' +
                '       <input class="form-control" name="phoneNum">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="email">' +
                '       <span class="input-group-addon">E-Mail</span>' +
                '       <input class="form-control" name="email">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="enable">' +
                '       <span class="input-group-addon">是否启用账户</span>' +
                '<input class="form-check-input" type="radio" name="enable" id="addEnable1" value="1">' +
                '       <label class="form-check-label" for="addEnable1">启用</label>' +
                '<input class="form-check-input" type="radio" name="enable" value="0"  id="addEnable0">' +
                '<label class="form-check-label" for="addEnable0">停用</label>' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="isUseGoogleAuth">' +
                '       <span class="input-group-addon">是否启用谷歌验证码</span>' +
                '<input class="form-check-input" type="radio" name="isUseGoogleAuth" id="addIsUseGoogleAuth1" value="Y">' +
                '       <label class="form-check-label" for="addIsUseGoogleAuth1" >启用</label>' +
                '<input class="form-check-input" type="radio" name="isUseGoogleAuth" value="N"  id="addIsUseGoogleAuth2">' +
                '<label class="form-check-label" for="addIsUseGoogleAuth2">停用</label>' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-8">' +
                '   <div class="input-group">' +
                '       <span class="input-group-addon">谷歌验证码密钥</span>' +
                '       <input  class="form-control" name="googleSecretKey" readonly >' +
                '   </div>' +
                '</section>' +
                '<div class="btn-group">' +
                '<input type="button" id="addGetGoogleSecretKey" class="btn btn-primary btn-sm" value="獲取"  style="margin-right: 5px;" ' +
                'onclick="userSetting.getGoogleSecretKey(this)" />' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-11">' +
                '<label class="label" id="roleIdList">账户角色设置</label>' +
                '<div class="inline-group"></div>' +
                '</section></div>' +
                '</fieldset></form>',
            editHtml:
                '<form id="editDialogForm" class="smart-form" autocomplete="off">' +
                '<fieldset>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="userName">' +
                '       <span class="input-group-addon">账号</span>' +
                '       <input placeholder="" class="form-control" name="userName" readonly  >' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="password">' +
                '       <span class="input-group-addon">密码</span>' +
                '       <input placeholder="不改变留空白" type="password" class="form-control" name="password" autocomplete="new-password">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="name">' +
                '       <span class="input-group-addon">昵称</span>' +
                '       <input class="form-control" name="name" placeholder="最多10字符，包含文字、字母和数字">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="phoneNum">' +
                '       <span class="input-group-addon">手机号码</span>' +
                '       <input class="form-control" name="phoneNum">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="email">' +
                '       <span class="input-group-addon">E-Mail</span>' +
                '       <input class="form-control" name="email">' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="enable">' +
                '       <span class="input-group-addon">是否启用账户</span>' +
                '<input class="form-check-input" type="radio" name="enable" id="editEnable1" value="1">' +
                '       <label class="form-check-label" for="editEnable1">启用</label>' +
                '<input class="form-check-input" type="radio" name="enable" value="0"  id="editEnable0">' +
                '<label class="form-check-label" for="editEnable0">停用</label>' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-10">' +
                '   <div class="input-group" id="isUseGoogleAuth">' +
                '       <span class="input-group-addon">是否启用谷歌验证码</span>' +
                '<input class="form-check-input" type="radio" name="isUseGoogleAuth" id="editIsUseGoogleAuth1" value="Y">' +
                '       <label class="form-check-label" for="editIsUseGoogleAuth1">启用</label>' +
                '<input class="form-check-input" type="radio" name="isUseGoogleAuth" value="N"  id="editIsUseGoogleAuth2">' +
                '<label class="form-check-label" for="editIsUseGoogleAuth2">停用</label>' +
                '   </div></section></div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-8">' +
                '   <div class="input-group">' +
                '       <span class="input-group-addon">谷歌验证码密钥</span>' +
                '       <input  class="form-control" name="googleSecretKey" readonly >' +
                '   </div>' +
                '</section>' +
                '<div class="btn-group">' +
                '<input type="button" id="editGetGoogleSecretKey" class="btn btn-primary btn-sm" value="獲取"  style="margin-right: 5px;" ' +
                'onclick="userSetting.getGoogleSecretKey(this)" />' +
                '</div>' +
                '<div class="btn-group">' +
                '<input type="button" class="btn btn-primary btn-sm" value="显示二维码" ' +
                'onclick="userSetting.showGoogleSecretKeyQRCode()" />' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<section class="col-xs-12 col-sm-12 col-md-12 col-lg-11">' +
                '<label class="label" id="roleIdList">账户角色设置</label>' +
                '<div class="inline-group"></div>' +
                '</section></div>' +
                '</fieldset></form>',
            deleteHtml:
                '<div class="form-row">' +
                '   <div class="input-group">' +
                '       <span>即将删除账号: ' +
                '           <span id="deleteData"></span>' +
                '       </span>' +
                '   </div>' +
                '   <div class="input-group" id="message"></div></div>',
            qrCodeHtml:
                '<div id="qrCodePage">' +
                ' <div id="qrCodeContent"></div>' +
                '</div>',
            referenceDataHtml: '<div><div id="reference"></div><div id="referenceResult"></div></div>',
            roleIdListHtml: '<label class="checkbox"><input type="checkbox" name="roleIdList"></label>',
            captionText: '账户管理',
            addDialogTitle: '新增账户',
            editDialogTitle: '编辑账户',
            deleteDialogTitle: '删除账户',
            qrCodeDialogTitle: 'GoogleAuthenticator',
            formQueryApi: 'rest/user/findByPage',
            addApi: 'rest/user/addAdmin',
            editApi: 'rest/user/updateUser',
            deleteApi: 'rest/user/deleteUser/',
            getGoogleSecretKeyAPI: 'rest/user/getGoogleSecretKey',
            showGoogleSecretKeyQRCodeAPi: 'rest/user/showGoogleSecretKeyQRCode',
            getRoleListAPi: 'rest/user/findAllRoleList',
            findRoleListByUserNameAPi: 'rest/user/findRoleListByUserName',
            getStatusListAPi: 'rest/user/getStatusList'
        }, stateMap = {
            addDialog: null,
            editDialog: null,
            deleteDialog: null,
            jqGridOption: null,
            qrCodeDialog: null
        }, jqueryMap = {
            $jqGrid: $("#jqgrid"),
            $statusSelect: $("#statusSelect"),
            $editContent: $(configMap.editHtml),
            $addContent: $(configMap.addHtml),
            $deleteContent: $(configMap.deleteHtml),
            $qrCodeContent: $(configMap.qrCodeHtml)
        }, init, initJqGrid, getCaption, onAddClick, onEditClick, onDeleteClick, onEditSubmitClick, onAddSubmitClick,
        onDeleteSubmitClick, addQueryTopEvent, getGoogleSecretKey,
        showGoogleSecretKeyQRCode, onShowGoogleQRCodeClick, getAllRoleList, initStatusList;

    onAddSubmitClick = function () { //新增按下确认送出资料
        mv.cleanErrorMsg(); //送出时清除错误提示
        var postData =
            {
                userName: jqueryMap.$addContent.find("input[name='userName']").val(),
                password: jqueryMap.$addContent.find("input[name='password']").val(),
                name: jqueryMap.$addContent.find("input[name='name']").val(),
                phoneNum: jqueryMap.$addContent.find("input[name='phoneNum']").val(),
                email: jqueryMap.$addContent.find("input[name='email']").val(),
                enable: jqueryMap.$addContent.find("input[name='enable']:checked").val(),
                isUseGoogleAuth: jqueryMap.$addContent.find("input[name='isUseGoogleAuth']:checked").val(),
                googleSecretKey: jqueryMap.$addContent.find("input[name='googleSecretKey']").val()
            };
        var roleIdList = [];
        var roleCheckBoxList = jqueryMap.$addContent.find("input:checked[name='roleIdList']");
        $.each(roleCheckBoxList, function (i) { //取得被选取checkBox的值
            roleIdList.push(roleCheckBoxList[i].value);
        });
        postData['roleIdList'] = roleIdList;
        $.post(configMap.addApi, postData).then(function (response) {
            if (response.code === "0") {
                stateMap.addDialog.close();
                mv.reloadJqGrid(stateMap.jqGridOption);
                swal({text: "新增成功", type: "success"});
            } else {
                var errorText = "";
                if ("账号已存在" === response.message) {
                    errorText = "账号已存在";
                } else {
                    errorText = "资料格式有误，请检查输入资料";
                }
                mv.showErrorMsg(response); //依照回传的错误id来显示错误提示
            }
        });
    };

    onEditSubmitClick = function () {  //编辑按下确认送出资料
        mv.cleanErrorMsg("editDialogForm"); //送出时清除错误提示
        var postData =
            {
                userName: jqueryMap.$editContent.find("input[name='userName']").val(),
                password: jqueryMap.$editContent.find("input[name='password']").val(),
                name: jqueryMap.$editContent.find("input[name='name']").val(),
                phoneNum: jqueryMap.$editContent.find("input[name='phoneNum']").val(),
                email: jqueryMap.$editContent.find("input[name='email']").val(),
                enable: jqueryMap.$editContent.find("input[name='enable']:checked").val(),
                isUseGoogleAuth: jqueryMap.$editContent.find("input[name='isUseGoogleAuth']:checked").val(),
                googleSecretKey: jqueryMap.$editContent.find("input[name='googleSecretKey']").val(),
                roleIdList: [],
            };

        var roleIdList = [];
        var roleCheckBoxList = jqueryMap.$editContent.find("input:checked[name='roleIdList']");
        roleCheckBoxList.each((i) => roleIdList.push(roleCheckBoxList[i].value));
        postData['roleIdList'] = roleIdList;
        console.log('出去');

        $.patch(configMap.editApi, postData).then(function (response) {
            if (response.code === "0") {
                stateMap.editDialog.close();
                mv.reloadJqGrid(stateMap.jqGridOption);
                swal({text: "修改成功", type: "success"});
            } else {
                mv.showErrorMsg(response, "editDialogForm"); //依照回传的错误id来显示错误提示
            }

        });
    };
    onDeleteSubmitClick = function () {
        var rowData = jqueryMap.$deleteContent.data("rowData");
        $.delete(configMap.deleteApi + rowData.userName).then(function (response) {
            if (response.code === "0") {
                stateMap.deleteDialog.close();
                mv.reloadJqGrid(stateMap.jqGridOption);
                swal({text: "删除成功", type: "success"});
            } else {
                var errorText = "";
                if ("账号不存在" === response.message) {
                    errorText = "账号不存在";
                } else {
                    errorText = response.message;
                }
                swal({text: errorText, type: "error"});
            }
        });
    };
    onShowGoogleQRCodeClick = function () {
        stateMap.qrCodeDialog.close();
    };
    getGoogleSecretKey = function (obj) { //取得谷歌验证码密钥放在input
        var data = {id: ""};
        $.post(configMap.getGoogleSecretKeyAPI, data).then(function (response) {
            if ("0" === response.code) {
                if ("addGetGoogleSecretKey" === obj.id) {
                    jqueryMap.$addContent.find("input[name='googleSecretKey']").val(response.result);
                } else {
                    jqueryMap.$editContent.find("input[name='googleSecretKey']").val(response.result);
                }
            }
        });
    };
    showGoogleSecretKeyQRCode = function () { //显示谷歌验证码密钥QRCode
        var data =
            {
                userName: jqueryMap.$editContent.find("input[name='userName']").val(),
                googleSecretKey: jqueryMap.$editContent.find("input[name='googleSecretKey']").val()
            };
        $.post(configMap.showGoogleSecretKeyQRCodeAPi, data).then(function (response) {
            if ("0" === response.code) {
                var canOptions = {
                    text: response.result
                };
                var $qrCode = $("#qrCodeContent");
                $qrCode.empty();
                $qrCode.qrcode(canOptions);
                stateMap.qrCodeDialog.open();
            }
        });
    };
    onAddClick = function () { //开启新增dialog
        mv.cleanErrorMsg(); //展开新增dialog要清除错误提示
        jqueryMap.$addContent.find("input[name='userName']").val("");
        jqueryMap.$addContent.find("input[name='password']").val("");
        jqueryMap.$addContent.find("input[name='name']").val("");
        jqueryMap.$addContent.find("input[name='email']").val("");
        jqueryMap.$addContent.find("input[name='phoneNum']").val("");
        jqueryMap.$addContent.find("input[name='googleSecretKey']").val("");
        jqueryMap.$addContent.find("input[name='enable'][value='1']").prop("checked", true);
        jqueryMap.$addContent.find("input[name='isUseGoogleAuth'][value='N']").prop("checked", true);

        var $roleGroup = jqueryMap.$addContent.find(".inline-group");
        $roleGroup.html("");
        getAllRoleList()
            .done(function (getAllRoleListData) {
                if ("0" === getAllRoleListData.code) {  //长出所有角色的checkBox
                    var roleList = getAllRoleListData.result;
                    $.each(roleList, function (i, v) {
                        var $roleIdListContent = $(configMap.roleIdListHtml);
                        $roleIdListContent.find("input[name='roleIdList']").val(v.id);
                        $roleIdListContent.append("<i></i>" + v.roleName);
                        $roleGroup.append($roleIdListContent);
                    });
                }
            });
        stateMap.addDialog.open();
    };
    onEditClick = function (id) { //开启编辑dialog
        mv.cleanErrorMsg("editDialogForm"); //展开编辑dialog要清除错误提示
        var rowData = jqueryMap.$jqGrid.jqGrid('getRowData', id);
        jqueryMap.$editContent.data("rowData", rowData);
        jqueryMap.$editContent.find("input[name='userName']").val(rowData.userName);
        jqueryMap.$editContent.find("input[name='name']").val(rowData.name);
        jqueryMap.$editContent.find("input[name='phoneNum']").val(rowData.phoneNum);
        jqueryMap.$editContent.find("input[name='email']").val(rowData.email);
        if ("启用" === rowData.enable) {
            jqueryMap.$editContent.find("input[name='enable'][value='1']").prop("checked", true);
        } else {
            jqueryMap.$editContent.find("input[name='enable'][value='0']").prop("checked", true);
        }

        if ("启用" === rowData.isUseGoogleAuth) {
            jqueryMap.$editContent.find("input[name='isUseGoogleAuth'][value='Y']").prop("checked", true);
        } else {
            jqueryMap.$editContent.find("input[name='isUseGoogleAuth'][value='N']").prop("checked", true);
        }

        jqueryMap.$editContent.find("input[name='googleSecretKey']").val(rowData.googleSecretKey);

        var $roleGroup = jqueryMap.$editContent.find(".inline-group");
        $roleGroup.html("");
        var data = {userName: rowData.userName};

        getAllRoleList()
            .done(function (getAllRoleListData) {
                if ("0" === getAllRoleListData.code) {  //长出所有角色的checkBox
                    var roleList = getAllRoleListData.result;
                    $.each(roleList, function (i, v) {
                        var $roleIdListContent = $(configMap.roleIdListHtml);
                        $roleIdListContent.find("input[name='roleIdList']").val(v.id);
                        $roleIdListContent.append("<i></i>" + v.roleName);
                        $roleGroup.append($roleIdListContent);
                    });
                    //-----------------------上面html长完后才执行下段-------------------------------
                    //判断该会员id目前是哪些角色来勾选对应的checkBox
                    $.get(configMap.findRoleListByUserNameAPi, data).then(function (response) {
                        if ("0" === response.code) {
                            var roleList = response.result.roleIdList;
                            $.each(roleList, function (i, v) {
                                $roleGroup.find("[name='roleIdList'][value=" + roleList[i] + "]").prop('checked', true);
                            });
                        }
                    });
                }
            });
        stateMap.editDialog.open();
    };
    onDeleteClick = function (id) {
        var rowData = jqueryMap.$jqGrid.jqGrid('getRowData', id);
        jqueryMap.$deleteContent.data("rowData", rowData);
        var $message = jqueryMap.$deleteContent.find("#message");
        $message.html("");
        jqueryMap.$deleteContent.find("#deleteData").html(rowData.userName);
        stateMap.deleteDialog.open();
    };

    addQueryTopEvent = function () {
        licoSetting.onClearForm();
        $('#queryForm').on('click', function () {
            stateMap.jqGridOption.url = configMap.formQueryApi + "?userName=" + $("#queryInput").val() + "&status=" + $("#statusSelect").val();
            mv.reloadJqGrid(stateMap.jqGridOption);
        });

        $('#clearForm').on('click', function () {
            licoSetting.onClearForm();
            stateMap.jqGridOption.url = configMap.formQueryApi;
            mv.reloadJqGrid(stateMap.jqGridOption);
        });
    };
    getCaption = function () {
        var $caption = $(configMap.caption_html);
        $caption.find("label.input").html(configMap.captionText);
        return $caption[0].outerHTML;
    };
    initJqGrid = function () {
        stateMap.jqGridOption = {
            colunmName: ['账号', '昵称', 'E-Mail', '手机号码', '是否启用', '状态', '最后登入时间', '最后登入IP',
                '是否启用谷歌验证码', '谷歌验证码密钥', '功能'],
            colunmModel: [
                {
                    name: "userName", index: "userName", width: 1, sortable: true, align: 'center'
                },
                {
                    name: "name", index: "name", width: 1, sortable: true, align: 'center'
                },
                {
                    name: "email", index: "email", width: 2, sortable: true, align: 'center'
                },
                {
                    name: "phoneNum", index: "phoneNum", width: 1, sortable: true, align: 'center'
                },
                {
                    name: "enable", index: "enable", width: 1, sortable: true, align: 'center',
                    formatter: function (cellValue) {
                        if ("1" === cellValue) {
                            return "启用"
                        } else {
                            return "停用"
                        }
                    }
                },
                {
                    name: "status", index: "status", width: 1, sortable: true, align: 'center',
                    formatter: function (cellValue) {
                        if ("1" === cellValue) {
                            return "正常"
                        } else {
                            return "未知"
                        }
                    }
                },
                {
                    name: "lastLoginDate", index: "lastLoginDate", width: 1, sortable: true, align: 'center'
                },
                {
                    name: "lastLoginIp", index: "lastLoginIp", width: 1, sortable: true, align: 'center'
                },
                {
                    name: "isUseGoogleAuth", index: "isUseGoogleAuth", width: 1, sortable: true, align: 'center',
                    formatter: function (cellValue) {
                        if ("N" === cellValue) {
                            return "停用"
                        } else {
                            return "启用"
                        }
                    }
                },
                {
                    name: "googleSecretKey", index: "googleSecretKey", hidden: true
                },
                {
                    name: 'operation',
                    index: 'operation',
                    sortable: false,
                    title: false,
                    align: 'center',
                    classes: 'white-space-no',
                    width: 2,
                    formatter: function (cellValue, options, rowObject) {
                        var id = rowObject.id;
                        return "<button class='btn btn-sm btn-primary' onclick='userSetting.onEditClick(" + id + ");'>编辑</button>" +
                            " / <button class='btn btn-sm btn-danger' onclick='userSetting.onDeleteClick(" + id + ");'>删除</button>";
                    }
                }
            ],
            caption: getCaption(),
            url: configMap.formQueryApi,
            jqgrid: jqueryMap.$jqGrid,
            pager: '#pjqgrid',
            sortname: 'id',
            formObj: $("#form"),
            sortorder: "desc"
        };
        mv.jqgrid(stateMap.jqGridOption);
    };

    stopMoving = function () {
        alert('');
    };


    initStatusList = function () {
        var data = {userName: ""};
        $.get(configMap.getStatusListAPi, data).then(function (response) {
            if ("0" === response.code) {
                var statusArray = response.result;
                $.each(statusArray, function (k, v) {
                    if ("1" === k) { //目前只显示正常状态的选项
                        jqueryMap.$statusSelect.append("<option value=" + k + ">" + v + "</option>")
                    }
                });
            }
        });
    };


    $(document).ready(function () {
        // Event Lot
        var events = $("#app-eventlog");
        // Column Definitions
        var columnSet = [
            {
                title: "RowId",
                id: "DT_RowId",
                data: "DT_RowId",
                placeholderMsg: "Server Generated ID",
                "visible": false,
                "searchable": false,
                type: "readonly"
            },
            {
                title: "Status",
                id: "status",
                data: "status",
                type: "select",
                "options": [
                    "active",
                    "inactive",
                    "disabled",
                    "partial"
                ]
            },
            {
                title: "IP Address",
                id: "ipAddress",
                data: "ipAddress",
                type: "text",
                pattern: "((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}",
                placeholderMsg: "e.g 82.84.86.88",
                errorMsg: "*Invalid address - Enter valid ip.",
                hoverMsg: "(Optional) - Ex: 82.84.86.88",
                unique: true,
                uniqueMsg: "Already exists. IP must be unique!",
            },
            {
                title: "Port Number",
                id: "port",
                data: "port",
                type: "text",
                pattern: "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$",
                placeholderMsg: "e.g 6112",
                errorMsg: "*Invalid port - Enter valid port or range.",
                hoverMsg: "Ex: 6112 (single)   or   6111:6333 (range)",
                unique: false
            },
            {
                title: "Activation Date",
                id: "adate",
                data: "adate",
                type: "date",
                pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
                placeholderMsg: "yyyy-mm-dd",
                errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
            },
            {
                title: "User Email",
                id: "user",
                data: "user",
                type: "text",
                pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
                placeholderMsg: "user@domain.com",
                errorMsg: "*Invalid email - Enter valid email.",
                unique: true,
                uniqueMsg: "Email already in use"
            },
            {
                title: "Package",
                id: "package",
                data: "package",
                type: "select",
                "options": [
                    "free",
                    "silver",
                    "gold",
                    "platinum",
                    "payg"
                ]
            },
            {
                title: "Acc. Balance",
                id: "balance",
                data: "balance",
                type: "number",
                placeholderMsg: "Amount due",
                defaultValue: "0"
            }];


        /* start data table */
        var myTable = $('#dt-basic-example').dataTable(
            {
                /* check datatable buttons page for more info on how this DOM structure works */
                dom: "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
                    "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                ajax: "/admin/user/findAllMember",
                dataSrc: function (json) {
                    console.log('找尋到一個');
                    return json.result;
                },
                columns: columnSet,
                /* selecting multiple rows will not work */
                select: 'single',
                /* altEditor at work */
                altEditor: true,
                responsive: true,
                /*按鈕相關設置*/
                buttons: [
                    {
                        extend: 'selected',
                        text: '<i class="fal fa-times mr-1"></i> Delete',
                        name: 'delete',
                        className: 'btn-primary btn-sm mr-1'
                    },
                    {
                        extend: 'selected',
                        text: '<i class="fal fa-edit mr-1"></i> Edit',
                        name: 'edit',
                        className: 'btn-primary btn-sm mr-1'
                    },
                    {
                        text: '<i class="fal fa-plus mr-1"></i> Add',
                        name: 'add',
                        className: 'btn-success btn-sm mr-1'
                    },
                    {
                        text: '<i class="fal fa-sync mr-1"></i> Synchronize',
                        name: 'refresh',
                        className: 'btn-primary btn-sm'
                    }],
                columnDefs: [
                    {
                        targets: 1,
                        render: function (data, type, full, meta) {
                            console.log('1515');
                            var badge = {
                                "active":
                                    {
                                        'title': 'Active',
                                        'class': 'badge-success'
                                    },
                                "inactive":
                                    {
                                        'title': 'Inactive',
                                        'class': 'badge-warning'
                                    },
                                "disabled":
                                    {
                                        'title': 'Disabled',
                                        'class': 'badge-danger'
                                    },
                                "partial":
                                    {
                                        'title': 'Partial',
                                        'class': 'bg-danger-100 text-white'
                                    }
                            };
                            if (typeof badge[data] === 'undefined') {
                                return data;
                            }
                            return '<span class="badge ' + badge[data].class + ' badge-pill">' + badge[data].title + '</span>';
                        },
                    },
                    {
                        targets: 7,
                        type: 'currency',
                        render: function (data, type, full, meta) {
                            //var number = Number(data.replace(/[^0-9.-]+/g,""));
                            if (data >= 0) {
                                return '<span class="text-success fw-500">$' + data + '</span>';
                            }
                            else {
                                return '<span class="text-danger fw-500">$' + data + '</span>';
                            }
                        },
                    },
                    {
                        targets: 6,
                        render: function (data, type, full, meta) {
                            var package = {
                                "free":
                                    {
                                        'title': 'Free',
                                        'class': 'bg-fusion-50',
                                        'info': 'Free users are restricted to 30 days of use'
                                    },
                                "silver":
                                    {
                                        'title': 'Silver',
                                        'class': 'bg-fusion-50 bg-fusion-gradient'
                                    },
                                "gold":
                                    {
                                        'title': 'Gold',
                                        'class': 'bg-warning-500 bg-warning-gradient'
                                    },
                                "platinum":
                                    {
                                        'title': 'Platinum',
                                        'class': 'bg-trans-gradient'
                                    },
                                "payg":
                                    {
                                        'title': 'PAYG',
                                        'class': 'bg-success-500 bg-success-gradient'
                                    }
                            };
                            if (typeof package[data] === 'undefined') {
                                return data;
                            }
                            return '<div class="has-popover d-flex align-items-center"><span class="d-inline-block rounded-circle mr-2 ' + package[data].class + '" style="width:15px; height:15px;"></span><span>' + package[data].title + '</span></div>';
                        },
                    },],

                /* default callback for insertion: mock webservice, always success */
                onAddRow: function (dt, rowdata, success, error) {
                    console.log("Missing AJAX configuration for INSERT");
                    success(rowdata);

                    // demo only below:
                    events.prepend('<p class="text-success fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
                },
                onEditRow: function (dt, rowdata, success, error) {
                    console.log("Missing AJAX configuration for UPDATE");
                    success(rowdata);

                    // demo only below:
                    events.prepend('<p class="text-info fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
                },
                onDeleteRow: function (dt, rowdata, success, error) {
                    console.log("Missing AJAX configuration for DELETE");
                    success(rowdata);

                    // demo only below:
                    events.prepend('<p class="text-danger fw-500">' + JSON.stringify(rowdata, null, 4) + '</p>');
                },
            });

    });


    init = function () {
        initStatusList();
        initJqGrid();
        addQueryTopEvent();
        stateMap.addDialog = new dialog({
            title: configMap.addDialogTitle,
            width: 600,
            height: 650
        }, {
            content: jqueryMap.$addContent, submitHandler: onAddSubmitClick
        });
        stateMap.editDialog = new dialog({
            title: configMap.editDialogTitle,
            width: 600,
            height: 650
        }, {
            content: jqueryMap.$editContent, submitHandler: onEditSubmitClick
        });
        stateMap.deleteDialog = new dialog({
            title: configMap.deleteDialogTitle
        }, {
            content: jqueryMap.$deleteContent, submitHandler: onDeleteSubmitClick
        });
        stateMap.qrCodeDialog = new dialog({
            title: configMap.qrCodeDialogTitle,
            width: 300
        }, {
            content: jqueryMap.$qrCodeContent, submitHandler: onShowGoogleQRCodeClick
        });
    };


    jqueryMap.$editContent.find("[name='isUseGoogleAuth']").change(function () {
        let checked = jqueryMap.$editContent.find("input[name='isUseGoogleAuth']:checked").val();
        let googleKey = jqueryMap.$editContent.find("[name='googleSecretKey']").val();
        if (checked === "Y" && googleKey === "") {
            jqueryMap.$editContent.find("#editGetGoogleSecretKey").click();
        }
    })
    jqueryMap.$addContent.find("[name='isUseGoogleAuth']").change(function () {
        let checked = jqueryMap.$addContent.find("input[name='isUseGoogleAuth']:checked").val();
        let googleKey = jqueryMap.$addContent.find("[name='googleSecretKey']").val();
        if (checked === "Y" && googleKey === "") {
            jqueryMap.$addContent.find("#addGetGoogleSecretKey").click();
        }
    })

    getAllRoleList = function () {
        return $.get(configMap.getRoleListAPi, {userName: ""});
    };

    return {
        init: init,
        onAddClick: onAddClick,
        onEditClick: onEditClick,
        onDeleteClick: onDeleteClick,
        getGoogleSecretKey: getGoogleSecretKey,
        showGoogleSecretKeyQRCode: showGoogleSecretKeyQRCode
    }
})();