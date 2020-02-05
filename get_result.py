import pickle

with open("qiandao_file","rb")as f:
    t=pickle.load(f)

for time,con in t.items():
#    print(time)
    with open("static/qiandao_%s"%time,"w",encoding="utf-8")as f:

        for name,content in con.items():
 #           print(name)
  #          print("健康状况:%s"%content["state"])
   #         print("ip:%s"%content["ip"])
    #        print("--------------------------------------------------------")
            f.write("%s\t%s\t%s\n"%(name,content["state"],content["ip"]))
