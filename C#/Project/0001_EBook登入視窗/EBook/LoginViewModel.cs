using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBook
{
    public class LoginViewModel:INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;
        private void RaisePropertyChanged(string propertyName)
        {
            PropertyChangedEventHandler handler = PropertyChanged;
            if (handler != null) handler(this, new PropertyChangedEventArgs(propertyName));
        }

        private LoginModel _LoginM = new LoginModel();

        public string Acc
        {
            get { return _LoginM.Acc; }
            set 
            { 
                _LoginM.Acc = value;
                RaisePropertyChanged(nameof(Acc));
            }
        }

        public string Pwd
        {
            get { return _LoginM.Pwd; }
            set
            {
                _LoginM.Pwd = value;
                RaisePropertyChanged(nameof(Pwd));
            }
        }
    }
}
