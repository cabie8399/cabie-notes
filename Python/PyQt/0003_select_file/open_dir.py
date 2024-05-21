from PyQt6 import QtWidgets
import sys

class MyWidget(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('oxxo.studio')
        self.resize(300, 200)
        self.ui()

    def ui(self):
        self.btn = QtWidgets.QPushButton(self)  # 加入按鈕
        self.btn.move(20, 20)
        self.btn.setText('開啟檔案')
        self.btn.clicked.connect(self.open)

    def open(self):
        filePath = QtWidgets.QFileDialog.getExistingDirectory()  # 選擇檔案對話視窗
        print(filePath)

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    Form = MyWidget()
    Form.show()
    sys.exit(app.exec())