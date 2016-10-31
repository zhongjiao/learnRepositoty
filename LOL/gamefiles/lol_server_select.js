
if(!LOLServerSelect)
{
    var LOLServerSelect={};
}

LOLServerSelect.create=function(select_array, ext_opt_array, opt_array)
{
    return new MultiSelect.create(select_array, opt_array||LOLServerSelect.DATA, ext_opt_array||[]);
}

LOLServerSelect.STD_DATA= 
[

    {t:"��ŷ����  ����",v:"1", status:"1"}
,
    {t:"�ȶ�������  ��ͨ",v:"2", status:"1"}
,
    {t:"�氲 ����",v:"3", status:"1"}
,
    {t:"ŵ����˹  ����",v:"4", status:"1"}
,
    {t:"�������� ��ͨ",v:"6", status:"1"}
,
    {t:"��¶��� ����",v:"5", status:"1"}
,
    {t:"Ƥ�����ַ� ����",v:"7", status:"1"}
,
    {t:"ս��ѧԺ ����",v:"8", status:"1"}
,
    {t:"���׶�׿�� ��ͨ",v:"9", status:"1"}
,
    {t:"����� ����",v:"10", status:"1"}
,
    {t:"��ɪ�ر� ����",v:"11", status:"1"}
,
    {t:"��η�ȷ� ��ͨ",v:"12", status:"1"}
,
    {t:"�þ�֮�� ����",v:"13", status:"1"}
,
    {t:"��ɫõ�� ����",v:"14", status:"1"}
,
    {t:"��Ӱ�� ����",v:"15", status:"1"}
,
    {t:"�������� ����",v:"17", status:"1"}
,
    {t:"ˡ���� ��ͨ",v:"16", status:"1"}
,
    {t:"������� ����",v:"19", status:"1"}
,
    {t:"ˮ��֮�� ����",v:"18", status:"1"}
,
    {t:"������ר��",v:"21", status:"1"}
,
    {t:"Ӱ�� ����",v:"22", status:"1"}
,
    {t:"����֮�� ����",v:"23", status:"1"}
,
    {t:"Ť������ ��ͨ",v:"20", status:"1"}
,
    {t:"����֮�� ����",v:"24", status:"1"}
,
    {t:"�������� ����",v:"25", status:"1"}
,
    {t:"Ƥ�Ǿ��� ����",v:"27", status:"1"}
,
    {t:"����֮�� ��ͨ",v:"26", status:"1"}

];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
LOLServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
{
	//��ʾͣ��
	var arrOpt = opt_array||LOLServerSelect.STD_DATA;
	
	if(arrOpt && arrOpt.length > 0){
		for(var i = 0; i < arrOpt.length; i++){
			if(arrOpt[i].status * 1 === 0){
				if(arrOpt[i].t.indexOf('(ͣ��)') >= 0){
					continue;
				}
				arrOpt[i].t += "(ͣ��)";
			}
		}
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
}

LOLServerSelect.showzone2=function(select_array, ext_opt_array, opt_array)
{
	//ͣ������
	var arrOpt = opt_array||LOLServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		var tempArrOpt = [];
		for(var i = 0; i < arrOpt.length; i++){
			if(arrOpt[i].status * 1 != 0){
				tempArrOpt.push(arrOpt[i]);
			}
		}
		arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
}

LOLServerSelect.showStatusByServerId = function(serverId){
	if(!serverId){
		return "";
	}	
	var arrOpt = LOLServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		for(var i = 0; i < arrOpt.length; i++){
			if(serverId == arrOpt[i].v){
				return (arrOpt[i].status);
			}
		}
	}
	return "";
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////


LOLServerSelect.zoneToName=function(ssn)
{
    var data=this.STD_DATA;
    var len=data.length;
    var result;
    for(var i=0;i<len;i++)
    {
        if(data[i].v==String(ssn))
        {
            result=data[i].t;
            break;
        }
    }
    return result || "";
}

LOLServerSelect.ssn2desc=LOLServerSelect.zoneToName;
/*  |xGv00|9503a3371b302b58d62a9bf626f70b38 */
