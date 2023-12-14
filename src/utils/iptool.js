

/**
	 * 根据子网掩码位数计算子网掩码
	 * @param inetMask
	 * @return 返回""，表示参数错误
	 */
 export function getNetMask(inetMask)
 {
   let netMask="";
   if(inetMask>32)
   {
     return netMask;
   }
     //子网掩码为1占了几个字节
     let num1 = inetMask/8;
     //子网掩码的补位位数
     let num2 = inetMask%8;
     let array = new Array(4);
     for(let i=0;i<num1;i++)
     {
       array[i]=255;
     }
     for(let i=num1;i<4;i++)
     {
       array[i]=0;
     }
     for(let i=0;i<num2;num2--)
     {
       array[num1]+=Math.pow(2,8-num2);
     }
     netMask=array[0]+"."+array[1]+"."+array[2]+"."+array[3];
     
     return netMask;		
 }