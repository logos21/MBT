import requests
from itertools import cycle
import time

position=[[36.772986, 126.933569],[36.772796, 126.933899],[36.771754, 126.934613],[36.769721, 126.935176],[36.768723, 126.935776],[36.767534, 126.934711],[36.766789, 126.933902],[36.766809, 126.933529],[36.767737, 126.932821],[36.768012, 126.931936],[36.768762, 126.931288],[36.768762, 126.931288],[36.769252, 126.930954],[36.768822, 126.929310],[36.768380, 126.928475],[36.769160, 126.927829],[36.769707, 126.927528],[36.771126, 126.929331],[36.774748, 126.932539],[36.773416, 126.933639],[36.772986, 126.933569]]
#url="http://141.164.40.104:3000/BusMap/Position?N1=%f&W1=%f&N2=%f&W2=%f&N3=%f&W3=%f"
#url="http://141.164.40.104:3000/BusMap/Position?N1=%f&W1=%f"

while(1):
   for x in position:
      url="http://141.164.40.104:3000/BusMap/Position?N1=%f&W1=%f&N2=%f&W2=%f&N3=%f&W3=%f"%(x[0],x[1],x[0],x[1],x[0],x[1])
      print x
      res=requests.get(url)  
      print "request position"
      print url   
      time.sleep(5)

