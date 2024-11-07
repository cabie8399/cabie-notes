using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace EBook
{
    public class Relaycommand : ICommand
    {
        // 命命是否能夠執行
        readonly Func<bool> _canExecute;
        // 命令需要執行的方法
        readonly Action _execute;

        public Relaycommand(Action action, Func<bool> canExecute)
        {
            _canExecute = canExecute;
            _execute = action;
        }

        public bool CanExecute(object parameter) 
        {
            if (_canExecute != null) {
                return true;
            }
            return _canExecute();
        }

        public void Execute(object parameter) 
        {
            _execute();
        }

        public event EventHandler CanExecuteChanged
        {
            add
            {
                if (_canExecute == null)
                {
                    CommandManager.RequerySuggested += value;
                }
            }
            remove
            {
                if (_canExecute != null)
                {
                    CommandManager.RequerySuggested -= value;
                }
            }
        }
    }
}
